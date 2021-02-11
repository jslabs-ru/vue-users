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
          {{ element.name }} <slot></slot>
        </div>

        <div
          slot="header"
          class="list-group-header btn-group list-group-item"
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
div.list-group-header {
    background: #FFCC99;
}
</style>
