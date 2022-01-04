<template>
	<div class="SwitchiIputItem">
		<div
			:class="[
				'inputSwitch',
				{ itemBbOnePX: configuration.isBorderBottom },
			]"
		>
			<div class="switchLeft">
				<div class="switchLabel">{{ configuration.label }}</div>
				<div class="switchDescribe">{{ configuration.describe }}</div>
			</div>
			<div class="switchRight">
				<input
					:class="['mui-switch', { ajkSwitch: isAJK }]"
					type="checkbox"
					v-model="checked"
					@change="switchChange"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import './index.less'
import { defineComponent, ref, watchEffect } from 'vue'

export default defineComponent({
	name: 'SwitchInput',

	props: {
		value: {
			type: Object,
			default: () => ({}),
		},
		isAJK: {
			type: Boolean,
			default: () => true,
		},
		configuration: {
			type: Object,
			default: () => ({
				isBorderBottom: false, //是否需borderBottom
				checked: '3', //选中后端所需值
				unchecked: '1', //未选中后端所需值
				label: '转店平台勿扰', //标题
				describe: '开启后将有效减少转店平台来电', //描述
			}),
		},
	},

	setup: (props) => {
		const checked = ref(false)
		const switchChange = () => {
			props.value.value = checked.value
				? props.configuration.checked
				: props.configuration.unchecked
		}

		watchEffect(() => {
			checked.value = props.value.value === props.configuration.checked
		})

		return { switchChange, checked }
	},
})
</script>