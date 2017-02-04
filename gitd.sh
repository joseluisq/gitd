#!/bin/sh

REPOSITORY=$1
BRANCH=$2
DIRECTORY=$3

if [[ -z "$REPOSITORY" ]]; then
  exit "No respository supplied"
fi

if [[ -z "$BRANCH" ]]; then
  exit "No branch supplied"
fi

if [[ -z "$DIRECTORY" ]]; then
  exit "No directory supplied"
fi

if git clone \
--quiet \
--depth 1 \
--single-branch \
--branch ${BRANCH} \
${REPOSITORY} \
${DIRECTORY}
then
  rm -fr ${DIRECTORY}/.git
  echo ${DIRECTORY}
  exit
fi

exit 1
