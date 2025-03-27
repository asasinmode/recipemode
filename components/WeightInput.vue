<script setup lang="ts">
defineProps<{
	id: string;
	label: string;
	noG?: boolean;
}>();

const emit = defineEmits<{
	focusout: [FocusEvent];
}>();

const modelValue = defineModel<string | number>({ required: true });

function parseInput(event: FocusEvent) {
	const value = Number.parseInt(`${(event.target as HTMLInputElement).value}`.replaceAll(/[^\d\-.]/g, ''));

	if (Number.isNaN(value) || value < 0) {
		modelValue.value = 0;
	} else {
		modelValue.value = value;
	}

	(event.target as HTMLInputElement).value = modelValue.value.toString();

	emit('focusout', event);
}
</script>

<template>
	<input
		:id="id"
		v-model="modelValue"
		class="min-w-15 w-15 rounded-full bg-[#1b1b1f] px-3 py-1 color-[#ffffff] dark:bg-[#deded6] dark:color-[#161618] focus:(outline-[var(--vp-c-brand-3)] outline)"
		@focusout="parseInput"
	>
	<label class="ml-[0.2rem]" :for="id">{{ noG ? '' : 'g' }} {{ label }}</label>
</template>
