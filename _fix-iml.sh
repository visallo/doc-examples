#!/bin/bash
set -eu

# IntelliJ doesn't automatically make `src/main/javascript`
# resource dirs, even with the maven resource plugin. So,
# this script converts the idea project files to make them
# resource directories.
# 
# Also ignores some compiled directories in the web app directory: css, imgc, jsc, libs, etc
# 
# **Quit IntelliJ before running**

DIR=$(cd "$(dirname "$0")" && pwd)
cd "${DIR}/.."

changed=0

sedi=(-i)
case "$(uname)" in
  Darwin*) sedi=(-i "")
esac

function pushd {
  command pushd "$@" > /dev/null
}

function popd {
  command popd "$@" > /dev/null
}

function findJavascriptDistDir {
  local imlDir="$1"
  pushd ${imlDir}
  if [[ -d 'src/main/javascript' ]]; then
    set +e
    find 'src/main/javascript' -type d -name dist | grep -v node_modules
    set -e
  fi
  popd
  return 0
}

function addContentLineToIml {
  local imlFile="$1"
  local line="$2"
  sed "${sedi[@]}" "s|</content>|  ${line}\n    </content>|" "${imlFile}"
}

function addIfMissing {
  local imlFile="$1"
  local pattern="$2"
  local line="$3"
  if ! grep -q "${pattern}" "${imlFile}"; then
    echo "adding ${pattern} to: ${imlFile}"
    addContentLineToIml "${imlFile}" "${line}"
    changed=1
  fi
}

find . -type f -name '*.iml' 2>/dev/null | while read imlFile; do
  imlDir=$(dirname "${imlFile}")
  if [[ -e "${imlDir}/src/main/javascript" ]]; then
    addIfMissing "${imlFile}" 'src/main/javascript' '<sourceFolder url="file://$MODULE_DIR$/src/main/javascript" type="java-resource" />'

    for nodemodulesDir in $(cd "${imlDir}" && find src/main/javascript -type d -name node_modules -prune); do
      addIfMissing "${imlFile}" "${nodemodulesDir}" "<excludeFolder url=\"file://\$MODULE_DIR\$/${nodemodulesDir}\" />"
    done
  fi

  if [[ -e "${imlDir}/node_modules" ]]; then
    addIfMissing "${imlFile}" "\$MODULE_DIR\$/node_modules" "<excludeFolder url=\"file://\$MODULE_DIR\$/node_modules\" />"
  fi

  distDir=$(findJavascriptDistDir ${imlDir})
  if [[ ! -z "${distDir}" ]]; then
    addIfMissing "${imlFile}" "${distDir}" "<excludeFolder url=\"file://\$MODULE_DIR\$/${distDir}\" />"
  fi
done

if [[ ${changed} -eq 0 ]]; then
  echo "All iml files up to date"
else
  echo "done"
fi
