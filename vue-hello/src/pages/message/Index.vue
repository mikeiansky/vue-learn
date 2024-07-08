<template>
    <div>
        This is message page ...
        <div>
            <div>
                <ul class="menu">
                    <li>
                        <RouterLink :to="{
                            name: '/message/detail', query: {
                                id: 1,
                                title: '-001'
                            },
                            params: {
                                id: 1,
                                title: '-001'
                            }
                        }">message-01</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{
                            name: '/message/detail', query: {
                                id: 2,
                                title: '-002'
                            },
                            params: {
                                id: 2,
                                title: '-002'
                            }
                        }">message-02</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{
                            name: '/message/detail', query: {
                                id: 3,
                                title: '-003'
                            },
                            params: {
                                id: 3,
                                title: '-003'
                            }
                        }">message-03</RouterLink>
                    </li>
                </ul>
            </div>
            <div>
                <RouterView />
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
import type { title } from 'process';
import { RouterLink, RouterView } from 'vue-router';
</script>
<style></style>