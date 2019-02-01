import { connect } from 'public/v1/api'
import { Component } from 'react'

const SIZE = 20;

class SearchExample extends Component {

    constructor(props) {
        super(props);

        const { initialParameters } = props;
        this.state = { query: initialParameters && initialParameters.q || '' }
    }

    componentDidUpdate(prevProps) {
        if (this.props.initialParameters && this.props.initialParameters.q &&
            prevProps.initialParameters && prevProps.initialParameters.q !== this.props.initialParameters.q) {
            this.setState({
                query: this.props.initialParameters.q
            }, this.search);
        }
    }

    render() {
        return (
            <div className="org-visallo-examples-advanced">
              <div className="query-container">
                <textarea placeholder="Query" onChange={this.onQueryChange} value={this.state.query}></textarea>
              </div>
              <div className="button-container">
                <button className="btn btn-primary" onClick={this.onSearchClick}>Execute</button>
              </div>
            </div>
        )
    }

    onSearchClick = () => {
        this.search();
    }

    onQueryChange = (event) => {
        this.setState({ query: event.target.value });

        this.props.setCurrentSearchForSaving({
            url: '/org/visallo/examples/search_advanced/react/search',
            parameters: {
                q: event.target.value
            }
        });
    }

    onInfiniteScrollRequest(resultsNode, data) {
        connect()
            .then(({ dataRequest }) => {
                dataRequest('org-visallo-examples-search', 'search', this.state.query, data.paging.offset, SIZE)
                    .then((result) => {
                        $(resultsNode).trigger(
                            resultsNode,
                            'addInfiniteItems',
                            {
                                success: true,
                                items: result.elements,
                                total: result.totalHits,
                                nextOffset: result.nextOffset
                            }
                        );
                    })
            })
    }

    search() {
        connect()
            .then(({ components, dataRequest }) => {
                return Promise.all([
                    components.List,
                    dataRequest('org-visallo-examples-search', 'search', this.state.query, 0, SIZE)
                ]);
            })
            .spread((List, result) => {
                this.props.updateQueryStatus({
                    success: true,
                    message: i18n('org.visallo.examples.search.advanced.hits', result.totalHits)
                });

                this.props.renderResults(resultsNode => {
                    const content = $(resultsNode).css('display', result.totalHits ? 'block' : 'none')
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

                    $(resultsNode).off('infiniteScrollRequest').on('infiniteScrollRequest', (event, data) => {
                        this.onInfiniteScrollRequest(resultsNode, data);
                    })
                });
            })
            .catch(e => {
                this.props.updateQueryStatus({ success: false, error: e });
            })
    }
}

export default SearchExample;
