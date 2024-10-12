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
    <a-table
      :data="[]"
      :columns="[
        {
          title: 'Name',
          dataIndex: 'name',
          filterDropdownVisible: visible,
        },
      ]"
    />
  </div>
</template>

<script>
const str = '大家好';
const str2 = `'说什么？${str}`;
const visible = true;
const arr = [
  {
    title: 'Name',
    dataIndex: 'name',
    filterDropdownVisible: visible,
  },
]
</script>