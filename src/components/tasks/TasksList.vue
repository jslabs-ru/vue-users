<template>
    <draggable
        :list="list"
        @end="onDragEnd"
        class="list-group"
        draggable=".item"
        group="tasks"
    >
        <div
          class="list-group-item item"
          v-for="element in list"
          :key="element.name"
        >
          {{ element.name }}
        </div>

        <div
          slot="header"
          class="btn-group list-group-item list-group-header"
          role="group"
          aria-label="Basic example"
        >
            {{ stageName }}
        </div>
    </draggable>
</template>

<script>
import Draggable from 'vuedraggable';

export default {
    name: 'TasksList',
    data () {
        return {
        }
    },
    props: {
        stageName: {
            type: String
        },
        list: {
            type: Array
        },
        trackTasks: {
            type: Function
        }
    },
    components: {
        Draggable
    },
    computed: {
        tasksDragModel: {
            get () {

            },
            set () {

            }
        }
    },
    methods: {
        openTaskPage (id) {

        },
        onDragEnd () {
            this.trackTasks()
        }
    }
}
</script>

<style>
.list-group-header {
    background-color: #FFCC99;
}
</style>
