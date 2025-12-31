<template>
  <div style="height: 100%;">
    <div class="mode-switch">
      <el-tooltip content="Switch between C, Python and EVM JavaScript mode" placement="bottom">
        <el-radio-group v-model="config.format" @change="generateCode">
          <el-radio value="c">C</el-radio>
          <el-radio value="python">Python</el-radio>
          <el-radio value="evm-js">EVM JavaScript</el-radio>
        </el-radio-group>
      </el-tooltip> &nbsp;

      <el-button @click="exportCodeAsFile">
        <el-icon><Download /></el-icon>
        Export
      </el-button>
    </div>

    <v-ace-editor
      id="code-editor"
      @init="editorInit"
      value=""
      :lang="config.format === 'evm-js' ? 'javascript' : 'python'"
      :options="{
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
        fontSize: 14,
        tabSize: 2,
        showPrintMargin: false,
        highlightActiveLine: true,
      }"
      style="height: 600px" @click.stop @mousedown.stop @mouseup.stop @keypress.stop @keyup.stop @keydown.stop @contextmenu.stop />
  </div>
</template>

<script lang="ts">
import { VAceEditor } from 'vue3-ace-editor';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-vue';
import 'ace-builds/src-noconflict/snippets/less';

// @ts-ignore
ace.config.set('basePath', '/node_modules/ace-builds/src-min-noconflict');

import { projectStore } from './store/projectStore';
import { Download } from '@element-plus/icons-vue';
import { saveAs } from './utils.js';

export default {
  name : 'creator-editor',
  props: [],
  emits: ['event'],
  components: {
    VAceEditor,
    Download,
  },
  data: function() {
    return {
      editor: null,
      config: projectStore.projectData.settings.output,
    }
  },
  mounted() {
    this.generateCode();
  },
  methods: {
    editorInit(editor) {
      editor.getSession().setUseWrapMode(true);
      editor.setAutoScrollEditorIntoView(true);
      editor.setFontSize(15);
      editor.resize();
      
      editor.setTheme("ace/theme/clouds_midnight");
      editor.setOptions({ maxLines: '200px' });

      this.editor = editor;
    },
    setValue(text) {
      this.editor.setValue(text);
    },
    getValue() {
      return this.editor.getValue();
    },
    generateCode() {
      projectStore.projectData.settings.output.format = this.config.format;
      this.$emit('event', 'generateCode', this.config.format);
    },

    exportCodeAsFile: async function () {
      await this.generateCode();
      let code = this.getValue();
      let blob = new Blob([code], {type: "text/plain;charset=utf-8"});
      let fileName = this.act_FileName || ('' + +new Date());
      
      const format = projectStore.projectData.settings.output.format;
      
      if (format == 'c') {
        saveAs(blob, `lvgl_lv_${fileName}.h`);
      } else if (format == 'evm-js') {
        saveAs(blob, `lvgl_lv_${fileName}.js`);
      } else {
        saveAs(blob, `lvgl_lv_${fileName}.py`);
      }
    },
  },
};
</script>
<style lang="less" scoped>

</style>
<style lang="less">
</style>