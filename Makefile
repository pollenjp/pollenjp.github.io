ROOT := $(abspath $(dir $(lastword $(MAKEFILE_LIST))))

JEKYLL_DOCKER_IMAGE := "jekyll/jekyll"

CONTAINER_REPO_DIRPATH := /srv/jekyll/repo
PAGES_PATH := docs

HOST_PORT := 4000
CONTAINER_PORT := 4000

.PHONY: run
run:
	docker run \
		--rm \
		--volume "${ROOT}:${CONTAINER_REPO_DIRPATH}" \
		--interactive \
		--tty \
		--publish ${HOST_PORT}:${CONTAINER_PORT} \
		${JEKYLL_DOCKER_IMAGE} \
		bash -euxc '\
			echo "Generating config for local run" && \
			local_config_path=/local_run_config.yml && \
			echo "github:"                                             > $${local_config_path} && \
			echo "  url: \"http://$$(hostname -i):${CONTAINER_PORT}\"" >> $${local_config_path} && \
			echo "bundle install and exec" && \
			cd ${CONTAINER_REPO_DIRPATH} && \
			bundle install && \
			bundle exec jekyll serve \
				--force_polling \
				--host $$(hostname -i) \
				--trace \
				--config ${CONTAINER_REPO_DIRPATH}/${PAGES_PATH}/_config.yml,$${local_config_path} \
				--source ${CONTAINER_REPO_DIRPATH}/${PAGES_PATH} \
				--layouts ${CONTAINER_REPO_DIRPATH}/${PAGES_PATH}/_layouts \
				--destination ${CONTAINER_REPO_DIRPATH}/${PAGES_PATH}/_site \
		'

.PHONY: help
help:
	docker run --rm -it ${JEKYLL_DOCKER_IMAGE} jekyll build --help
