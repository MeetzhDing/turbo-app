import type { PropType, SlotsType } from 'vue';
import { defineComponent } from 'vue';

// https://cn.vuejs.org/guide/typescript/overview.html#definecomponent
export default defineComponent({
  name: 'TheDynamic',
  inheritAttrs: true,
  props: {
    text: String,
    size: {
      type: String as PropType<'small' | 'middle' | 'large'>,
      default: 'middle',
    },
  },
  slots: Object as SlotsType<{
    default: any;
    item: { data: number };
  }>,
  emits: {
    // 没有验证函数
    submit: null,
    // 具有验证函数
    change: (payload: any) => {
      if (!Number.isNaN(Number(payload))) {
        return true;
      } else {
        console.warn(`Invalid update event payload!`);
        return false;
      }
    },
  },
  expose: ['count'],
  setup(props, context) {
    const count = ref(Number(props.text));
    context.expose(count);

    onMounted(() => {
      console.log('TheDynamic component mounted.');
    });
    watchEffect(() => {
      if (!Number.isNaN(Number(props.text))) {
        count.value = Number(props.text) + 1;
      }
    });

    return {
      count,
    };
  },
  render() {
    // https://cn.vuejs.org/api/component-instance.html
    const { $props, $attrs, $slots, $emit, $watch, $refs, $root, $parent, $el, count } = this;
    return (
      <div id={$attrs.id as string} class="flex-(~ col) gap-2">
        <div>Props text: {$props.text}</div>
        <div>Data count: {count}</div>

        <div>
          <div>Slot default: {$slots.default?.()}</div>
          <div>Slot item: {$slots.item?.({ data: count })}</div>
        </div>

        <div
          ref={'main'}
          class={`select-none ${{ small: 'text-base', middle: 'text-lg', large: 'text-xl' }[$props.size]}`}
          onClick={() => {
            $emit('change', count);
            $watch('count', (newVal, oldVal) => {
              console.log(`count value change: newVal is ${newVal}, oldVal is ${oldVal}`);
            });
            if ([$root, $parent, $el].some(Boolean)) {
              ($refs.main as Ref<HTMLElement>)?.value?.focus?.();
            }
          }}
        >
          Click Me
        </div>
      </div>
    );
  },

  // compilerOptions: {},
  // components: {},
  // directives: {},
  // template: '',
});

/** defineComponent Function - only available in vue3.3+ */
// export default defineComponent((props: {}, context: SetupContext<[], {}>) => {
//   return () => {
//     console.log(props, context)
//     return <div />;
//   };
// }, {
//   props: [],
//   emits: [],
//   slots: {}
// });
