<script setup>
import { computed } from "vue";
import SidebarItemLink from "./SidebarItemLink.vue";
import { isExternal } from "@/utils/validate";
import path from "path-browserify";

/** 清晰地指定组件所需的props*/
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isCollapse: {
    type: Boolean,
    default: false,
  },
  isFirstLevel: {
    type: Boolean,
    default: true,
  },
  basePath: {
    type: String,
    default: "",
  },
});

/** 是否始终显示权限根菜单 */
// !alwaysShowRootMenu &&
// const alwaysShowRootMenu = computed(() => {
//   return props.item.meta && props.item.meta.alwaysShow;
// });

/** 显示的子菜单 */
const showingChildNumber = computed(() => {
  if (props.item.children) {
    const showingChildren = props.item.children.filter((item) => {
      return !(item.meta && item.meta.hidden);
    });
    return showingChildren.length;
    console.log(showingChildren.length);
  }
  return 0;
});

/** 唯一的子菜单项 */
const theOnlyOneChild = computed(() => {
  if (showingChildNumber.value > 1) {
    return null;
  }
  if (props.item.children) {
    /** for...of遍历router子菜单的对象*/
    for (const child of props.item.children) {
      if (!child.meta || !child.meta.hidden) {
        return child;
      }
    }
  }
  // If there is no children, return itself with path removed,
  // because this.basePath already contains item's path information
  /** 
    如果没有孩子，则返回自身并删除路径，
    因为 this.basePath 已经包含项目的路径信息
  */
  return { ...props.item, path: "" };
});

/** 解析路径 */
const resolvePath = (routePath) => {
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(props.basePath)) {
    return props.basePath;
  }
  return path.resolve(props.basePath, routePath);
};
</script>

<template>
  <div
    v-if="!props.item.meta?.hidden"
    :class="{
      'simple-mode': props.isCollapse,
      'first-level': props.isFirstLevel,
    }"
  >
    <!-- 始终显示首页 -->
    <template v-if="theOnlyOneChild && !theOnlyOneChild.children">
      <SidebarItemLink
        v-if="theOnlyOneChild.meta"
        :to="resolvePath(theOnlyOneChild.path)"
      >
        <el-menu-item :index="resolvePath(theOnlyOneChild.path)">
          <svg-icon
            v-if="theOnlyOneChild.meta.svgIcon"
            :name="theOnlyOneChild.meta.svgIcon"
          />
          <component
            v-else-if="theOnlyOneChild.meta.elIcon"
            :is="theOnlyOneChild.meta.elIcon"
            class="el-icon"
          />
          <template v-if="theOnlyOneChild.meta.title" #title>
            {{ theOnlyOneChild.meta.title }}
          </template>
        </el-menu-item>
      </SidebarItemLink>
    </template>

    <el-sub-menu v-else :index="resolvePath(props.item.path)" teleported>
      <template #title>
        <svg-icon
          v-if="props.item.meta && props.item.meta.svgIcon"
          :name="props.item.meta.svgIcon"
        />
        <component
          v-else-if="props.item.meta && props.item.meta.elIcon"
          :is="props.item.meta.elIcon"
          class="el-icon"
        />
        <span v-if="props.item.meta && props.item.meta.title">{{
          props.item.meta.title
        }}</span>
      </template>

      <template v-if="props.item.children">
        <sidebar-item
          v-for="child in props.item.children"
          :key="child.path"
          :item="child"
          :is-collapse="props.isCollapse"
          :is-first-level="false"
          :base-path="resolvePath(child.path)"
        />
      </template>
    </el-sub-menu>
  </div>
</template>

<style lang="scss" scoped>
.svg-icon {
  min-width: 1em;
  margin-right: 12px;
  font-size: 18px;
}

.el-icon {
  width: 1em;
  margin-right: 12px;
  font-size: 18px;
}

.simple-mode {
  &.first-level {
    :deep(.el-sub-menu) {
      .el-sub-menu__icon-arrow {
        display: none;
      }

      span {
        visibility: hidden;
      }
    }
  }
}
</style>
