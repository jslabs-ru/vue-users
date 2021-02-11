<template>
    <div class="row">
        <div class="col">
            <TasksList
                :list='stageOneList'
            />
        </div>
        <div class="col">
            <TasksList
                :list='stageSecondList'
            />
        </div>
        <div class="col">
            <TasksList
                :list='stageThirdList'
            />
        </div>
    </div>
</template>

<script>
import TasksList from '@/components/tasks/TasksList.vue';
import Draggable from 'vuedraggable';

export default {
    name: 'TasksStagesPanel',
    data () {
        return {
            stageOneList: [
                {id: 0, name: 'task 1'},
                {id: 1, name: 'task 2'},
                {id: 2, name: 'task 3'},
            ],
            stageSecondList: [
                {id: 3, name: 'task 4'},
                {id: 4, name: 'task 5'},
                {id: 5, name: 'task 6'},
                {id: 6, name: 'task 7'},
            ],
            stageThirdList: [
            ],
        }
    },
    components: {
        TasksList
    }
}
</script>
