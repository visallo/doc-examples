define([
    'public/v1/api',
    'hbs!./template'
], function(
    api,
    template) {
    'use strict';

    var SIZE = 20;

    return api.defineComponent(SearchExample);

    function SearchExample() {

        this.attributes({
            textareaSelector: 'textarea',
            searchSelector: '.btn',
            resultsSelector: null
        })

        this.after('initialize', function() {
            this.on('click', {
                searchSelector: this.onSearch
            })
            this.on('change keyup', {
                textareaSelector: this.onChange
            })
            this.on('savedQuerySelected', this.onSavedQuerySelected);
            this.resultsContainer = $(this.attr.resultsSelector);
            this.on(this.resultsContainer, 'infiniteScrollRequest', this.onInfiniteScrollRequest);
            this.$node.html(template({}));
        });

        this.onSavedQuerySelected = function(event, data) {
            this.select('textareaSelector').val(data.query.parameters.q);
            this.runSearch();
        };

        this.onInfiniteScrollRequest = function(event, data) {
            var self = this;

            this.dataRequest('org-visallo-examples-search', 'search', this.query, data.paging.offset, SIZE)
                .then(function(result) {
                    self.trigger(
                        event.target,
                        'addInfiniteItems',
                        {
                            success: true,
                            items: result.elements,
                            total: result.totalHits,
                            nextOffset: result.nextOffset
                        }
                    );
                })
        };

        this.onChange = function(event) {
            this.trigger('setCurrentSearchForSaving', {
                url: '/org/visallo/examples/search_advanced/search',
                parameters: {
                    q: $(event.target).val()
                }
            })
        }

        this.onSearch = function(event) {
            this.runSearch();
        };

        this.runSearch = function() {
            var self = this,
                query = this.select('textareaSelector').val();

            this.query = query;
            api.connect().then(function(connected) {
                self.dataRequest = connected.dataRequest;
                return Promise.all([
                    connected.components.List,
                    connected.dataRequest('org-visallo-examples-search', 'search', query, 0, SIZE)
                ])
            }).spread(function(List, result) {
                var content = self.resultsContainer.css('display', 'block')
                    .find('.content')
                    .teardownAllComponents()
                    .empty()

                List.attachTo(content, {
                    items: result.elements,
                    usageContext: 'searchresults',
                    nextOffset: result.nextOffset,
                    infiniteScrolling: true,
                    total: result.totalHits
                })
            })
        };

    }
});
