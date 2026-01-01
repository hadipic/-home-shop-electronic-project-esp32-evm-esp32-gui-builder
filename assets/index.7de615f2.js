import{d as M,f as E,U as I,r as v,o as z,A as V,H as b,B as s,C as u,D as F,P as D,Q as H,ag as N,N as L,ah as Q,ab as P}from"./vendor.d575ceee.js";import{V as U}from"./ext-language_tools.a91fe0a7.js";import{_ as O}from"./_plugin-vue_export-helper.cdc0426e.js";var Z={exports:{}};(function(y,A){ace.define("ace/mode/python_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(n,a,d){var p=n("../lib/oop"),f=n("./text_highlight_rules").TextHighlightRules,k=function(){var c="and|as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|not|or|pass|print|raise|return|try|while|with|yield|async|await|nonlocal",q="True|False|None|NotImplemented|Ellipsis|__debug__",l="abs|divmod|input|open|staticmethod|all|enumerate|int|ord|str|any|eval|isinstance|pow|sum|basestring|execfile|issubclass|print|super|binfile|bin|iter|property|tuple|bool|filter|len|range|type|bytearray|float|list|raw_input|unichr|callable|format|locals|reduce|unicode|chr|frozenset|long|reload|vars|classmethod|getattr|map|repr|xrange|cmp|globals|max|reversed|zip|compile|hasattr|memoryview|round|__import__|complex|hash|min|apply|delattr|help|next|setattr|set|buffer|dict|hex|object|slice|coerce|dir|id|oct|sorted|intern|ascii|breakpoint|bytes",_=this.createKeywordMapper({"invalid.deprecated":"debugger","support.function":l,"variable.language":"self|cls","constant.language":q,keyword:c},"identifier"),o="[uU]?",i="[rR]",t="[fF]",e="(?:[rR][fF]|[fF][rR])",r="(?:(?:[1-9]\\d*)|(?:0))",x="(?:0[oO]?[0-7]+)",g="(?:0[xX][\\dA-Fa-f]+)",R="(?:0[bB][01]+)",w="(?:"+r+"|"+x+"|"+g+"|"+R+")",C="(?:[eE][+-]?\\d+)",T="(?:\\.\\d+)",h="(?:\\d+)",$="(?:(?:"+h+"?"+T+")|(?:"+h+"\\.))",B="(?:(?:"+$+"|"+h+")"+C+")",S="(?:"+B+"|"+$+")",m=`\\\\(x[0-9A-Fa-f]{2}|[0-7]{3}|[\\\\abfnrtv'"]|U[0-9A-Fa-f]{8}|u[0-9A-Fa-f]{4})`;this.$rules={start:[{token:"comment",regex:"#.*$"},{token:"string",regex:o+'"{3}',next:"qqstring3"},{token:"string",regex:o+'"(?=.)',next:"qqstring"},{token:"string",regex:o+"'{3}",next:"qstring3"},{token:"string",regex:o+"'(?=.)",next:"qstring"},{token:"string",regex:i+'"{3}',next:"rawqqstring3"},{token:"string",regex:i+'"(?=.)',next:"rawqqstring"},{token:"string",regex:i+"'{3}",next:"rawqstring3"},{token:"string",regex:i+"'(?=.)",next:"rawqstring"},{token:"string",regex:t+'"{3}',next:"fqqstring3"},{token:"string",regex:t+'"(?=.)',next:"fqqstring"},{token:"string",regex:t+"'{3}",next:"fqstring3"},{token:"string",regex:t+"'(?=.)",next:"fqstring"},{token:"string",regex:e+'"{3}',next:"rfqqstring3"},{token:"string",regex:e+'"(?=.)',next:"rfqqstring"},{token:"string",regex:e+"'{3}",next:"rfqstring3"},{token:"string",regex:e+"'(?=.)",next:"rfqstring"},{token:"keyword.operator",regex:"\\+|\\-|\\*|\\*\\*|\\/|\\/\\/|%|@|<<|>>|&|\\||\\^|~|<|>|<=|=>|==|!=|<>|="},{token:"punctuation",regex:",|:|;|\\->|\\+=|\\-=|\\*=|\\/=|\\/\\/=|%=|@=|&=|\\|=|^=|>>=|<<=|\\*\\*="},{token:"paren.lparen",regex:"[\\[\\(\\{]"},{token:"paren.rparen",regex:"[\\]\\)\\}]"},{token:["keyword","text","entity.name.function"],regex:"(def|class)(\\s+)([\\u00BF-\\u1FFF\\u2C00-\\uD7FF\\w]+)"},{token:"text",regex:"\\s+"},{include:"constants"}],qqstring3:[{token:"constant.language.escape",regex:m},{token:"string",regex:'"{3}',next:"start"},{defaultToken:"string"}],qstring3:[{token:"constant.language.escape",regex:m},{token:"string",regex:"'{3}",next:"start"},{defaultToken:"string"}],qqstring:[{token:"constant.language.escape",regex:m},{token:"string",regex:"\\\\$",next:"qqstring"},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:m},{token:"string",regex:"\\\\$",next:"qstring"},{token:"string",regex:"'|$",next:"start"},{defaultToken:"string"}],rawqqstring3:[{token:"string",regex:'"{3}',next:"start"},{defaultToken:"string"}],rawqstring3:[{token:"string",regex:"'{3}",next:"start"},{defaultToken:"string"}],rawqqstring:[{token:"string",regex:"\\\\$",next:"rawqqstring"},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],rawqstring:[{token:"string",regex:"\\\\$",next:"rawqstring"},{token:"string",regex:"'|$",next:"start"},{defaultToken:"string"}],fqqstring3:[{token:"constant.language.escape",regex:m},{token:"string",regex:'"{3}',next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],fqstring3:[{token:"constant.language.escape",regex:m},{token:"string",regex:"'{3}",next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],fqqstring:[{token:"constant.language.escape",regex:m},{token:"string",regex:"\\\\$",next:"fqqstring"},{token:"string",regex:'"|$',next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],fqstring:[{token:"constant.language.escape",regex:m},{token:"string",regex:"'|$",next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],rfqqstring3:[{token:"string",regex:'"{3}',next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],rfqstring3:[{token:"string",regex:"'{3}",next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],rfqqstring:[{token:"string",regex:"\\\\$",next:"rfqqstring"},{token:"string",regex:'"|$',next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],rfqstring:[{token:"string",regex:"'|$",next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],fqstringParRules:[{token:"paren.lparen",regex:"[\\[\\(]"},{token:"paren.rparen",regex:"[\\]\\)]"},{token:"string",regex:"\\s+"},{token:"string",regex:"'[^']*'"},{token:"string",regex:'"[^"]*"'},{token:"function.support",regex:"(!s|!r|!a)"},{include:"constants"},{token:"paren.rparen",regex:"}",next:"pop"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"}],constants:[{token:"constant.numeric",regex:"(?:"+S+"|\\d+)[jJ]\\b"},{token:"constant.numeric",regex:S},{token:"constant.numeric",regex:w+"[lL]\\b"},{token:"constant.numeric",regex:w+"\\b"},{token:["punctuation","function.support"],regex:"(\\.)([a-zA-Z_]+)\\b"},{token:_,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"}]},this.normalizeRules()};p.inherits(k,f),a.PythonHighlightRules=k}),ace.define("ace/mode/folding/pythonic",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode"],function(n,a,d){var p=n("../../lib/oop"),f=n("./fold_mode").FoldMode,k=a.FoldMode=function(c){this.foldingStartMarker=new RegExp("([\\[{])(?:\\s*)$|("+c+")(?:\\s*)(?:#.*)?$")};p.inherits(k,f),function(){this.getFoldWidgetRange=function(c,q,l){var _=c.getLine(l),o=_.match(this.foldingStartMarker);if(o)return o[1]?this.openingBracketBlock(c,o[1],l,o.index):o[2]?this.indentationBlock(c,l,o.index+o[2].length):this.indentationBlock(c,l)}}.call(k.prototype)}),ace.define("ace/mode/python",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/python_highlight_rules","ace/mode/folding/pythonic","ace/range"],function(n,a,d){var p=n("../lib/oop"),f=n("./text").Mode,k=n("./python_highlight_rules").PythonHighlightRules,c=n("./folding/pythonic").FoldMode,q=n("../range").Range,l=function(){this.HighlightRules=k,this.foldingRules=new c("\\:"),this.$behaviour=this.$defaultBehaviour};p.inherits(l,f),function(){this.lineCommentStart="#",this.$pairQuotesAfter={"'":/[ruf]/i,'"':/[ruf]/i},this.getNextLineIndent=function(o,i,t){var e=this.$getIndent(i),r=this.getTokenizer().getLineTokens(i,o),x=r.tokens;if(x.length&&x[x.length-1].type=="comment")return e;if(o=="start"){var g=i.match(/^.*[\{\(\[:]\s*$/);g&&(e+=t)}return e};var _={pass:1,return:1,raise:1,break:1,continue:1};this.checkOutdent=function(o,i,t){if(t!==`\r
`&&t!=="\r"&&t!==`
`)return!1;var e=this.getTokenizer().getLineTokens(i.trim(),o).tokens;if(!e)return!1;do var r=e.pop();while(r&&(r.type=="comment"||r.type=="text"&&r.value.match(/^\s+$/)));return r?r.type=="keyword"&&_[r.value]:!1},this.autoOutdent=function(o,i,t){t+=1;var e=this.$getIndent(i.getLine(t)),r=i.getTabString();e.slice(-r.length)==r&&i.remove(new q(t,e.length-r.length,t,e.length))},this.$id="ace/mode/python",this.snippetFileId="ace/snippets/python"}.call(l.prototype),a.Mode=l}),function(){ace.require(["ace/mode/python"],function(n){y&&(y.exports=n)})}()})(Z);var K={exports:{}};(function(y,A){ace.define("ace/theme/monokai-css",["require","exports","module"],function(n,a,d){d.exports=`.ace-monokai .ace_gutter {
  background: #2F3129;
  color: #8F908A
}

.ace-monokai .ace_print-margin {
  width: 1px;
  background: #555651
}

.ace-monokai {
  background-color: #272822;
  color: #F8F8F2
}

.ace-monokai .ace_cursor {
  color: #F8F8F0
}

.ace-monokai .ace_marker-layer .ace_selection {
  background: #49483E
}

.ace-monokai.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #272822;
}

.ace-monokai .ace_marker-layer .ace_step {
  background: rgb(102, 82, 0)
}

.ace-monokai .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #49483E
}

.ace-monokai .ace_marker-layer .ace_active-line {
  background: #202020
}

.ace-monokai .ace_gutter-active-line {
  background-color: #272727
}

.ace-monokai .ace_marker-layer .ace_selected-word {
  border: 1px solid #49483E
}

.ace-monokai .ace_invisible {
  color: #52524d
}

.ace-monokai .ace_entity.ace_name.ace_tag,
.ace-monokai .ace_keyword,
.ace-monokai .ace_meta.ace_tag,
.ace-monokai .ace_storage {
  color: #F92672
}

.ace-monokai .ace_punctuation,
.ace-monokai .ace_punctuation.ace_tag {
  color: #fff
}

.ace-monokai .ace_constant.ace_character,
.ace-monokai .ace_constant.ace_language,
.ace-monokai .ace_constant.ace_numeric,
.ace-monokai .ace_constant.ace_other {
  color: #AE81FF
}

.ace-monokai .ace_invalid {
  color: #F8F8F0;
  background-color: #F92672
}

.ace-monokai .ace_invalid.ace_deprecated {
  color: #F8F8F0;
  background-color: #AE81FF
}

.ace-monokai .ace_support.ace_constant,
.ace-monokai .ace_support.ace_function {
  color: #66D9EF
}

.ace-monokai .ace_fold {
  background-color: #A6E22E;
  border-color: #F8F8F2
}

.ace-monokai .ace_storage.ace_type,
.ace-monokai .ace_support.ace_class,
.ace-monokai .ace_support.ace_type {
  font-style: italic;
  color: #66D9EF
}

.ace-monokai .ace_entity.ace_name.ace_function,
.ace-monokai .ace_entity.ace_other,
.ace-monokai .ace_entity.ace_other.ace_attribute-name,
.ace-monokai .ace_variable {
  color: #A6E22E
}

.ace-monokai .ace_variable.ace_parameter {
  font-style: italic;
  color: #FD971F
}

.ace-monokai .ace_string {
  color: #E6DB74
}

.ace-monokai .ace_comment {
  color: #75715E
}

.ace-monokai .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y
}

.ace-monokai .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/monokai",["require","exports","module","ace/theme/monokai-css","ace/lib/dom"],function(n,a,d){a.isDark=!0,a.cssClass="ace-monokai",a.cssText=n("./monokai-css");var p=n("../lib/dom");p.importCssString(a.cssText,a.cssClass,!1)}),function(){ace.require(["ace/theme/monokai"],function(n){y&&(y.exports=n)})}()})(K);const Y={class:"simulator-container"},j={class:"toolbar"},W={class:"right-tools"},X={class:"main-content"},G={class:"editor-container"},J={class:"console-container"},ee={class:"console-input"},ne=M({__name:"index",setup(y){const A=E(""),n=E(""),a=E(""),d=E(!0),p={enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:4,fontSize:14},f=t=>{t.setShowPrintMargin(!1)},k=()=>{a.value="",P.success("Environment restarted")},c=()=>{localStorage.setItem("saved_code",A.value),P.success("Code saved successfully")},q=()=>{d.value=!d.value},l=async()=>{try{a.value+=`
> `+n.value,n.value=""}catch{P.error("Error executing code")}},_=()=>{},o=()=>{},i=()=>{};return I(()=>{const t=localStorage.getItem("saved_code");t&&(A.value=t)}),(t,e)=>{const r=v("Refresh"),x=v("el-icon"),g=v("el-button"),R=v("Download"),w=v("Edit"),C=v("el-button-group"),T=v("el-input");return z(),V("div",Y,[b("div",j,[s(C,null,{default:u(()=>[s(g,{type:"primary",onClick:k},{default:u(()=>[s(x,null,{default:u(()=>[s(r)]),_:1}),e[2]||(e[2]=F(" Restart ",-1))]),_:1}),s(g,{type:"success",onClick:c},{default:u(()=>[s(x,null,{default:u(()=>[s(R)]),_:1}),e[3]||(e[3]=F(" Save ",-1))]),_:1}),s(g,{onClick:q},{default:u(()=>[s(x,null,{default:u(()=>[s(w)]),_:1}),e[4]||(e[4]=F(" Editor ",-1))]),_:1})]),_:1}),b("div",W,[s(g,{onClick:_},{default:u(()=>[...e[5]||(e[5]=[F("History",-1)])]),_:1}),s(g,{onClick:o},{default:u(()=>[...e[6]||(e[6]=[F("Examples",-1)])]),_:1}),s(g,{onClick:i},{default:u(()=>[...e[7]||(e[7]=[F("Help",-1)])]),_:1})])]),b("div",X,[D(b("div",G,[s(N(U),{value:A.value,"onUpdate:value":e[0]||(e[0]=h=>A.value=h),lang:"python",theme:"monokai",options:p,onInit:f,style:{height:"100%",width:"100%"}},null,8,["value"])],512),[[H,d.value]]),b("div",J,[b("div",{class:"console-output",ref_key:"consoleOutput",ref:a},L(a.value),513),b("div",ee,[s(T,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=h=>n.value=h),placeholder:"Enter Python code...",onKeyup:Q(l,["enter"])},null,8,["modelValue"])])])])])}}});const re=O(ne,[["__scopeId","data-v-4ca86c62"]]);export{re as default};
