import { parse, Lang } from '@ast-grep/napi'

const source = `
<template>
  <div>
    <!-- 中文 -->
    <span v-if="xxx" xx="你好" :visible="xxx" :tooltipVisible="visible" :dropdownClassName="my-select-popup"></span>
    <a-select dropdownClassName="my-select-popup" xx="你好" :visible="visible" xxx="你好"></a-select>
    <a-select dropdownClassName="my-select-popup" xx="你好" :visible="visible" xxx="你好"/>
    <Select dropdownClassName="my-select-popup" xx="你好" :visible="visible" xxx="你好"></Select>
    <Select dropdownClassName="my-select-popup" xx="你好" :visible="visible" xxx="你好"/>
    
    <a-tag visible>tag</a-tag>
    <a-tag visible />
    <a-tag :visible="visible">tag</a-tag>
    <a-tag :visible="visible" />
    <Tag visible>tag</Tag>
    <Tag visible />
    <Tag :visible="visible">tag</Tag>
    <Tag :visible="visible"/>
    
    <a-slider :tooltipVisible="visible2" />
    <a-modal :visible="visible">  content</a-modal>
    <a-date-picker xx="你好" dropdownClassName="my-select-popup" v-model:value="value3" :format="monthFormat" :picker="month" />
    <a-range-picker dropdownClassName="my-select-popup" v-model:value="value3" :format="monthFormat" :picker="month" />
  </div>
</template>
`
const ast = parse(Lang.Html, source)
const root = ast.root()
const nodeList = root.findAll({
  language: Lang.Html,
  rule: {
    kind: 'attribute',
    all: [
      {
        has: {
          kind: 'attribute_name',
          regex: '^:columns$'
        },
      },
      {
        inside: {
          any: [
            {
              kind: 'start_tag',
              has: {
                kind: 'tag_name',
                regex: '^(a-table|Table)$'
              }
            },
            {
              kind: 'self_closing_tag',
              has: {
                kind: 'tag_name',
                regex: '^(a-table|Table)$'
              }
            }
          ]
        }
      }
    ]
  }
})

nodeList.forEach((node) => {
  const attributeValue = node.find({
    rule: {
      kind: 'attribute_value'
    }
  })?.text()
  if (attributeValue) {
    if (attributeValue.startsWith('[') && attributeValue.endsWith(']')) {
      // 字面量形式的 prop value
      console.log('wow', attributeValue.trim());
    } else {
      // 变量形式的 prop value
      const variableName = attributeValue
    }
  }
})

// const edit = nodeList.map(node => node.replace(':open'))
// const newSource = root.commitEdits(edit)
// console.log(newSource);






