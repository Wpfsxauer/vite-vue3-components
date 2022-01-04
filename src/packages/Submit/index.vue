<template>
	<div class="btn-content">
		<div class="btn" :class="{ ajk: isAJK }" @click="submit">
			{{ label }}
		</div>
	</div>
</template>

<script lang="ts">
import './index.less'
import { defineComponent, computed } from 'vue'

export default defineComponent({
	name: 'Submit',

	props: {
		isAJK: {
			type: Boolean,
			default: () => false,
		},
		label: {
			type: String,
			default: () => '提交',
		},
	},

	setup: (props, { emit }) => {
		const submit = () => {
			emit('submit')
		}

		return {
			submit,
		}
	},
})
</script>