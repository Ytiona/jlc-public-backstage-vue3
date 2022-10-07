<template>
  <el-button @click="clearSelection">clearSelection</el-button>
  <filter-page-table
    ref="fptRef"
    :filters="filters"
    :columns="columns"
    :get-data="getUserList"
    :table-events="tableEvents"
    @selection-change="onSelectionChange"
  >
    <template #filter-bottom>
      <el-button>新增</el-button>
    </template>
    <template #filter-status="{ bindForm }">
      <el-select v-model="bindForm.status" class="w-full">
        <el-option label="ly" value="1" />
        <el-option label="lyxxx" value="2" />
      </el-select>
    </template>
    <template #table-name="{ row }">
      <div>
        <el-input v-model="row.name" />
      </div>
    </template>
  </filter-page-table>
</template>

<script setup lang="ts">
  import FilterPageTable from '@/components/pro-table'

  const fptRef = ref()

  const filters = [
    {
      key: 'name',
    },
    {
      label: '状态',
      key: 'status',
      slot: 'filter-status',
    },
  ]
  const columns = [
    {
      type: 'selection',
    },
    {
      label: 'ID',
      prop: 'id',
    },
    {
      label: '姓名',
      prop: 'name',
      slot: 'table-name',
    },
  ]

  let i = 0

  const getUserList = (params: any) => {
    console.log(params)
    return new Promise<any>((resolve, reject) => {
      if (i % 2 == 0) {
        setTimeout(() => {
          reject()
        }, 500)
      } else {
        setTimeout(() => {
          resolve({
            list: [{ a: 1 }, { b: 2 }],
            total: 20,
          })
        }, 1000)
      }
      i++
    })
  }

  const tableEvents = {
    select(selection: any, row: any) {
      console.log(selection, row)
    },
  }

  const clearSelection = () => {
    fptRef.value.clearSelection()
  }

  const onSelectionChange = (selection: any) => {
    console.log(selection)
  }
</script>
