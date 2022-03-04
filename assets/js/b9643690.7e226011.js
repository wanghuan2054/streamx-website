"use strict";(self.webpackChunkstreamx_website=self.webpackChunkstreamx_website||[]).push([[579],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,d=m["".concat(l,".").concat(u)]||m[u]||k[u]||a;return t?r.createElement(d,o(o({ref:n},s),{},{components:t})):r.createElement(d,o({ref:n},s))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},283:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],p={id:"k8s-pvc-integration",title:"K8s PVC \u8d44\u6e90\u4f7f\u7528",sidebar_position:2},l=void 0,c={unversionedId:"flink-k8s/k8s-pvc-integration",id:"flink-k8s/k8s-pvc-integration",title:"K8s PVC \u8d44\u6e90\u4f7f\u7528",description:"K8s PVC \u8d44\u6e90\u4f7f\u7528\u8bf4\u660e",source:"@site/docs/flink-k8s/2-k8s-pvc-integration.md",sourceDirName:"flink-k8s",slug:"/flink-k8s/k8s-pvc-integration",permalink:"/docs/flink-k8s/k8s-pvc-integration",editUrl:"https://github.com/streamxhub/streamx-website/edit/dev/docs/flink-k8s/2-k8s-pvc-integration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"k8s-pvc-integration",title:"K8s PVC \u8d44\u6e90\u4f7f\u7528",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Flink K8s \u96c6\u6210\u652f\u6301",permalink:"/docs/flink-k8s/k8s-dev"},next:{title:"Hadoop \u8d44\u6e90\u96c6\u6210",permalink:"/docs/flink-k8s/hadoop-resource-integration"}},s=[{value:"K8s PVC \u8d44\u6e90\u4f7f\u7528\u8bf4\u660e",id:"k8s-pvc-\u8d44\u6e90\u4f7f\u7528\u8bf4\u660e",children:[],level:2}],k={toc:s};function m(e){var n=e.components,p=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},k,p,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"k8s-pvc-\u8d44\u6e90\u4f7f\u7528\u8bf4\u660e"},"K8s PVC \u8d44\u6e90\u4f7f\u7528\u8bf4\u660e"),(0,a.kt)("p",null,"\u5f53\u524d\u7248\u672c StreamX Flink-K8s \u4efb\u52a1\u5bf9 PVC \u8d44\u6e90\uff08\u6302\u8f7d checkpoint/savepoint/logs \u7b49\u6587\u4ef6\u8d44\u6e90\uff09\u7684\u652f\u6301\u57fa\u4e8e pod-template\u3002"),(0,a.kt)("p",null,"Native-Kubernetes Session \u7531\u521b\u5efa Session Cluster \u65f6\u63a7\u5236\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002Native-Kubernetes Application \u652f\u6301\u5728 StreamX \u9875\u9762\u4e0a\u76f4\u63a5\u7f16\u5199 ",(0,a.kt)("inlineCode",{parentName:"p"},"pod-template"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"jm-pod-template"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"tm-pod-template")," \u914d\u7f6e\u3002"),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u7b80\u8981\u7684\u793a\u4f8b\uff0c\u5047\u8bbe\u5df2\u7ecf\u63d0\u524d\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"flink-checkpoint"),"\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"flink-savepoint")," \u4e24\u4e2a PVC \uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"k8s pvc",src:t(6105).Z})),(0,a.kt)("p",null,"pod-template \u914d\u7f6e\u6587\u672c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: pod-template\nspec:\n  containers:\n    - name: flink-main-container\n      volumeMounts:\n        - name: checkpoint-pvc\n          mountPath: /opt/flink/checkpoints\n        - name: savepoint-pvc\n          mountPath: /opt/flink/savepoints\n  volumes:\n    - name: checkpoint-pvc\n      persistentVolumeClaim:\n        claimName: flink-checkpoint\n    - name: savepoint-pvc\n      persistentVolumeClaim:\n        claimName: flink-savepoint\n")),(0,a.kt)("p",null,"\u7531\u4e8e\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"rockdb-backend"),"\uff0c\u8be5\u4f9d\u8d56\u53ef\u4ee5\u7531 3 \u79cd\u65b9\u5f0f\u63d0\u4f9b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u63d0\u4f9b\u7684 Flink Base Docker Image \u5df2\u7ecf\u5305\u542b\u8be5\u4f9d\u8d56\uff08\u7528\u6237\u81ea\u884c\u89e3\u51b3\u4f9d\u8d56\u51b2\u7a81\uff09\uff1b")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728 StreamX \u672c\u5730 ",(0,a.kt)("inlineCode",{parentName:"p"},"Workspace/jars")," \u76ee\u5f55\u4e0b\u653e\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"flink-statebackend-rocksdb_xx.jar")," \u4f9d\u8d56\uff1b")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728 StreamX Dependency \u914d\u7f6e\u4e2d\u52a0\u5165 rockdb-backend \u4f9d\u8d56\uff08\u6b64\u65f6 StreamX \u4f1a\u81ea\u52a8\u89e3\u51b3\u4f9d\u8d56\u51b2\u7a81\uff09\uff1a"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"rocksdb dependency",src:t(8427).Z})))),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u5728\u968f\u540e\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u4f1a\u63d0\u4f9b\u4e00\u79cd\u4f18\u96c5\u7684 pod-template \u914d\u7f6e\u81ea\u52a8\u751f\u6210\u7684\u65b9\u5f0f\uff0c\u6765\u7b80\u5316 k8s-pvc \u6302\u8f7d\u8fd9\u4e00\u8fc7\u7a0b : )"))}m.isMDXComponent=!0},6105:function(e,n,t){n.Z=t.p+"assets/images/k8s_pvc-cdeee4dafe036102e017aad3b6c13f5d.png"},8427:function(e,n,t){n.Z=t.p+"assets/images/rocksdb_dependency-932be3682bef8d8cd169522c00cfd12b.png"}}]);