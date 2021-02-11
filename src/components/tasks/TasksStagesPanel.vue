<template>
    <div class="row">
        <div class="col">
            <TasksList
                :stageName="stages[0]"
                :list='stageOneList'
                :trackTasks="trackTasks"
            />
        </div>
        <div class="col">
            <TasksList
                :stageName="stages[1]"
                :list='stageSecondList'
                :trackTasks="trackTasks"
            />
        </div>
        <div class="col">
            <TasksList
                :stageName="stages[2]"
                :list='stageThirdList'
                :trackTasks="trackTasks"
            />
        </div>
        <div class="col">
            <TasksList
                :stageName="stages[3]"
                :list='stageForthList'
                :trackTasks="trackTasks"
            />
        </div>
    </div>
</template>

<script>
import TasksList from '@/components/tasks/TasksList.vue';
import Draggable from 'vuedraggable';

const [stageOneList, stageSecondList, stageThirdList, stageForthList] = [
    'stageOneList',
    'stageSecondList',
    'stageThirdList',
    'stageForthList',
]

export default {
    name: 'TasksStagesPanel',
    data () {
        return {
            stages: [
                'Consideration',
                'Development',
                'Testing',
                'Deploy',
            ],
            [stageOneList]: [
                {id: 0, name: 'task 1'},
                {id: 1, name: 'task 2'},
                {id: 2, name: 'task 3'},
            ],
            [stageSecondList]: [
                {id: 3, name: 'task 4'},
                {id: 4, name: 'task 5'},
                {id: 5, name: 'task 6'},
                {id: 6, name: 'task 7'},
            ],
            [stageThirdList]: [
            ],
            [stageForthList]: [
            ],
        }
    },
    components: {
        TasksList
    },
    methods: {
        trackTasks () {
            /* do smth with tasks */
            [stageOneList, stageSecondList, stageThirdList, stageForthList].forEach((item, i) => {
                console.log(this[item].length);
            });

        }
    }
}
</script>
