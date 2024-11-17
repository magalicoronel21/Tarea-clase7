<template>
    <div>
        <h1>todos</h1>
        <form @submit.prevent="addTodo()">
            <input v-model="todo">
        </form>
        <el-row :gutter="12">
            <el-col :span="12" v-for="( todo, index ) in todos" :key="index">
                <el-card class="box-card" shadow="hover" style="margin: 5px 0;">
                    <el-row :gutter="12">
                        <el-col :span="21">{{ todo }}</el-col>
                        <el-col :span="3">
                            <el-button @click="removeTodo(index)" type="success" icon="el-icon-check"
                                circle></el-button>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'TodoList',
    data() {
        return {
            todo: '',
            todos: []
        }
    },
    methods: {
        addTodo() {
            this.todos.push(this.todo);
            this.todo = '';
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        }
    }
}
</script>