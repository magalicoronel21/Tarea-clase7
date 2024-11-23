<template>
    <div>
        <h1>Todo List</h1>
        <form @submit.prevent="addTodo()">
            <el-input placeholder="Todo" v-model="todo"></el-input>
        </form>
        
        <el-row :gutter="12">
            <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" @remove-todo="removeTodo" @close-issue="closeIssue" />
            <TodoItem v-for="(issue, index) in issues" :key="issue.id" :todo="issue" :index="index" @remove-todo="removeTodo" @close-issue="closeIssue" />
        </el-row>
    </div>
</template>

<script>
import axios from 'axios';
import TodoItem from '@/components/TodoItem';

const client = axios.create({
    baseURL: `${process.env.VUE_APP_GITHUB_ENDPOINT}`,
    headers: {
        'Authorization': `token ${process.env.VUE_APP_GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
    },
});

export default {
    name: 'TodosIssues',
    components: {
        TodoItem
    },
    data() {
        return {
            todo: '',
            todos: [],
            issues: []
        }
    },
    methods: {
        addTodo() {
            this.todos.push({ type: 'task', taskName: this.todo });
            this.todo = '';
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        closeIssue(index) {
            const target = this.issues[index];
            client.patch(`/issues/${target.number}`, {
                state: 'closed'
            }).then(() => {
                this.issues.splice(index, 1);
            });
        },
        getIssues() {
            client.get('issues')
                .then((res) => {
                    this.issues = res.data.map(issue => ({ type: 'issue', issueName: issue.title, ...issue }));
                });
        }
    },
    created() {
        this.getIssues();
    }
}
</script>
