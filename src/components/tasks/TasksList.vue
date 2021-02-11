<template>
    <table class="table table-bordered" v-if="tasks.length">
        <thead>
            <tr>
                <th scope="col" class="pointer">Task name</th>
            </tr>
        </thead>
            <draggable
                tag="tbody"
                :list="list"
                v-model="tasksDragModel"
                group="tasks"
                draggable=".table-row"
                @end="onDragEnd"
            >
                <tr class="table-row"
                    v-for="(item, index) in list"
                >
                    <td scope="row" class="grabbable">
                        <span class="pointer">{{ item.name }}</span>
                    </td>
                    <!-- <td scope="row"
                        class="open-category-cell pointer"
                        @click="openTaskPage(item.id)"
                    ></td> -->
                </tr>
            </draggable>
    </table>
</template>

<script>
import Draggable from 'vuedraggable';

export default {
    name: 'TasksList',
    data () {
        return {
            tasks: [
                {id: 0, name: 'task 1'},
                {id: 1, name: 'task 2'},
                {id: 2, name: 'task 3'},
            ]
        }
    },
    props: {
        list: {
            type: Array
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

        }
    }
}
</script>
