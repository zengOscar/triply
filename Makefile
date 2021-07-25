
OPENAPI_CODEGEN	:= oapi-codegen
API_ROOT		:= api
TRIPLY_SCHEMA	:= ${API_ROOT}/schemas/triply.yaml
TRIPLY_ROOT		:= ${API_ROOT}/triply
TRIPLY_MODELS	:= ${TRIPLY_ROOT}/models.gen.go
TRIPLY_SERVER	:= ${TRIPLY_ROOT}/server.gen.go


define generate_openapi
    $(OPENAPI_CODEGEN) -package $(1) -generate $(2) $(3) > $(4)
    -goimports -w $(4)
endef

all: ${TRIPLY_ROOT} ${TRIPLY_MODELS} ${TRIPLY_SERVER}

${TRIPLY_ROOT}:
	mkdir -p $@

${TRIPLY_MODELS}: ${TRIPLY_SCHEMA} ${TRIPLY_ROOT}
	$(call generate_openapi,triply,types,$<,$@)

${TRIPLY_SERVER}: ${TRIPLY_SCHEMA} ${TRIPLY_ROOT}
	$(call generate_openapi,triply,server,$<,$@)