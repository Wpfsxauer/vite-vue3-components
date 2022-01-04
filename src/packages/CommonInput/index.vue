<!--通用input输入组件-->
<template>
	<div
		@click="handleClick"
		:class="['inputWrap', { marginBottom: staticOptions.marginBottom }]"
	>
		<div
			:class="['inputItem', { itemBbOnePX: staticOptions.isShowBorder }]"
		>
			<div class="dataBox">
				<div class="inputTitle">
					<span :class="{ error: hasErr }">{{
						staticOptions.title
					}}</span>
					<img
						src="../../assets/images/error_icon.png"
						alt=""
						v-if="hasErr"
					/>
				</div>
				<input
					:type="staticOptions.type"
					:readOnly="staticOptions.readOnly"
					:placeholder="staticOptions.placeholder"
					:value="copyWriting"
					@blur="handleBlur"
				/>

				<div class="checkPhoneBox" v-if="phoneConfig.show">
					{{ phoneConfig.desc }}
				</div>
			</div>
			<div class="iconBox" v-if="staticOptions.isShowIcon">
				<img :src="iconUrl" alt="" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import './index.less'
import { defineComponent } from 'vue'
import select_icon from '../../assets/images/select_icon.png'
export default defineComponent({
	name: 'CommonInput',

	props: {
		// 数据回显
		copyWriting: {
			type: String,
			default: '',
			required: false,
		},

		// 错误提示
		hasErr: {
			type: Boolean,
			default: false,
			required: false,
		},

		staticOptions: {
			type: Object,
			default: () => ({
				title: '标题',
				type: 'text',
				readOnly: true,
				placeholder: '请输入',
				marginBottom: false,
				isShowBorder: true,
				iconUrl: '',
				isShowIcon: true,
			}),
			required: false,
		},

		phoneConfig: {
			type: Object,
			default: () => ({
				desc: '',
				show: false,
			}),
		},
	},

	setup(props, { emit }) {
		const handleClick = () => {
			emit('handleClick')
		}

		const handleBlur = (item) => {
			emit('handleBlur', item.target.value)
		}

		const iconUrl = props.staticOptions.iconUrl
			? props.staticOptions.iconUrl
			: select_icon

		return { handleClick, handleBlur, iconUrl }
	},
})
</script>