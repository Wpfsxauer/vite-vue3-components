<template>
	<CommonInput
		:value="state"
		title="联系人"
		placeholder="请填写您的姓名"
	></CommonInput>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

import CommonInput from './packages/publishVerificationCode/index.vue'

export default defineComponent({
	name: 'App',
	components: {
		CommonInput,
	},

	setup() {
		const state = reactive({
			value: '',
			text: '',
		})
		return { state }
	},
})
</script>

