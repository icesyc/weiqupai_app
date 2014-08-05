var areaData = [{
    "province": "\u5317\u4eac\u5e02",
    "city": ["\u4e1c\u57ce\u533a", "\u897f\u57ce\u533a", "\u5d07\u6587\u533a", "\u5ba3\u6b66\u533a", "\u671d\u9633\u533a", "\u4e30\u53f0\u533a", "\u77f3\u666f\u5c71\u533a", "\u6d77\u6dc0\u533a", "\u95e8\u5934\u6c9f\u533a", "\u623f\u5c71\u533a", "\u901a\u5dde\u533a", "\u987a\u4e49\u533a", "\u660c\u5e73\u533a", "\u5927\u5174\u533a", "\u6000\u67d4\u533a", "\u5e73\u8c37\u533a", "\u5bc6\u4e91\u53bf", "\u5ef6\u5e86\u53bf"]
}, {
    "province": "\u5929\u6d25\u5e02",
    "city": ["\u548c\u5e73\u533a", "\u6cb3\u4e1c\u533a", "\u6cb3\u897f\u533a", "\u5357\u5f00\u533a", "\u6cb3\u5317\u533a", "\u7ea2\u6865\u533a", "\u5858\u6cbd\u533a", "\u6c49\u6cbd\u533a", "\u5927\u6e2f\u533a", "\u4e1c\u4e3d\u533a", "\u897f\u9752\u533a", "\u6d25\u5357\u533a", "\u5317\u8fb0\u533a", "\u6b66\u6e05\u533a", "\u5b9d\u577b\u533a", "\u5b81\u6cb3\u53bf", "\u9759\u6d77\u53bf", "\u84df\u53bf"]
}, {
    "province": "\u6cb3\u5317\u7701",
    "city": ["\u77f3\u5bb6\u5e84\u5e02", "\u5510\u5c71\u5e02", "\u79e6\u7687\u5c9b\u5e02", "\u90af\u90f8\u5e02", "\u90a2\u53f0\u5e02", "\u4fdd\u5b9a\u5e02", "\u5f20\u5bb6\u53e3\u5e02", "\u627f\u5fb7\u5e02", "\u6ca7\u5dde\u5e02", "\u5eca\u574a\u5e02", "\u8861\u6c34\u5e02"]
}, {
    "province": "\u5c71\u897f\u7701",
    "city": ["\u592a\u539f\u5e02", "\u5927\u540c\u5e02", "\u9633\u6cc9\u5e02", "\u957f\u6cbb\u5e02", "\u664b\u57ce\u5e02", "\u6714\u5dde\u5e02", "\u664b\u4e2d\u5e02", "\u8fd0\u57ce\u5e02", "\u5ffb\u5dde\u5e02", "\u4e34\u6c7e\u5e02", "\u5415\u6881\u5e02"]
}, {
    "province": "\u5185\u8499\u53e4",
    "city": ["\u547c\u548c\u6d69\u7279\u5e02", "\u5305\u5934\u5e02", "\u4e4c\u6d77\u5e02", "\u8d64\u5cf0\u5e02", "\u901a\u8fbd\u5e02", "\u9102\u5c14\u591a\u65af\u5e02", "\u547c\u4f26\u8d1d\u5c14\u5e02", "\u5df4\u5f66\u6dd6\u5c14\u5e02", "\u4e4c\u5170\u5bdf\u5e03\u5e02", "\u5174\u5b89\u76df", "\u9521\u6797\u90ed\u52d2\u76df", "\u963f\u62c9\u5584\u76df"]
}, {
    "province": "\u8fbd\u5b81\u7701",
    "city": ["\u6c88\u9633\u5e02", "\u5927\u8fde\u5e02", "\u978d\u5c71\u5e02", "\u629a\u987a\u5e02", "\u672c\u6eaa\u5e02", "\u4e39\u4e1c\u5e02", "\u9526\u5dde\u5e02", "\u8425\u53e3\u5e02", "\u961c\u65b0\u5e02", "\u8fbd\u9633\u5e02", "\u76d8\u9526\u5e02", "\u94c1\u5cad\u5e02", "\u671d\u9633\u5e02", "\u846b\u82a6\u5c9b\u5e02"]
}, {
    "province": "\u5409\u6797\u7701",
    "city": ["\u957f\u6625\u5e02", "\u5409\u6797\u5e02", "\u56db\u5e73\u5e02", "\u8fbd\u6e90\u5e02", "\u901a\u5316\u5e02", "\u767d\u5c71\u5e02", "\u677e\u539f\u5e02", "\u767d\u57ce\u5e02", "\u5ef6\u8fb9\u671d\u9c9c\u65cf\u81ea\u6cbb\u5dde"]
}, {
    "province": "\u9ed1\u9f99\u6c5f",
    "city": ["\u54c8\u5c14\u6ee8\u5e02", "\u9f50\u9f50\u54c8\u5c14\u5e02", "\u9e21\u897f\u5e02", "\u9e64\u5c97\u5e02", "\u53cc\u9e2d\u5c71\u5e02", "\u5927\u5e86\u5e02", "\u4f0a\u6625\u5e02", "\u4f73\u6728\u65af\u5e02", "\u4e03\u53f0\u6cb3\u5e02", "\u7261\u4e39\u6c5f\u5e02", "\u9ed1\u6cb3\u5e02", "\u7ee5\u5316\u5e02", "\u5927\u5174\u5b89\u5cad\u5730\u533a"]
}, {
    "province": "\u4e0a\u6d77\u5e02",
    "city": ["\u9ec4\u6d66\u533a", "\u5362\u6e7e\u533a", "\u5f90\u6c47\u533a", "\u957f\u5b81\u533a", "\u9759\u5b89\u533a", "\u666e\u9640\u533a", "\u95f8\u5317\u533a", "\u8679\u53e3\u533a", "\u6768\u6d66\u533a", "\u95f5\u884c\u533a", "\u5b9d\u5c71\u533a", "\u5609\u5b9a\u533a", "\u6d66\u4e1c\u65b0\u533a", "\u91d1\u5c71\u533a", "\u677e\u6c5f\u533a", "\u9752\u6d66\u533a", "\u5357\u6c47\u533a", "\u5949\u8d24\u533a", "\u5d07\u660e\u53bf"]
}, {
    "province": "\u6c5f\u82cf\u7701",
    "city": ["\u5357\u4eac\u5e02", "\u65e0\u9521\u5e02", "\u5f90\u5dde\u5e02", "\u5e38\u5dde\u5e02", "\u82cf\u5dde\u5e02", "\u5357\u901a\u5e02", "\u8fde\u4e91\u6e2f\u5e02", "\u6dee\u5b89\u5e02", "\u76d0\u57ce\u5e02", "\u626c\u5dde\u5e02", "\u9547\u6c5f\u5e02", "\u6cf0\u5dde\u5e02", "\u5bbf\u8fc1\u5e02"]
}, {
    "province": "\u6d59\u6c5f\u7701",
    "city": ["\u676d\u5dde\u5e02", "\u5b81\u6ce2\u5e02", "\u6e29\u5dde\u5e02", "\u5609\u5174\u5e02", "\u6e56\u5dde\u5e02", "\u7ecd\u5174\u5e02", "\u91d1\u534e\u5e02", "\u8862\u5dde\u5e02", "\u821f\u5c71\u5e02", "\u53f0\u5dde\u5e02", "\u4e3d\u6c34\u5e02"]
}, {
    "province": "\u5b89\u5fbd\u7701",
    "city": ["\u5408\u80a5\u5e02", "\u829c\u6e56\u5e02", "\u868c\u57e0\u5e02", "\u6dee\u5357\u5e02", "\u9a6c\u978d\u5c71\u5e02", "\u6dee\u5317\u5e02", "\u94dc\u9675\u5e02", "\u5b89\u5e86\u5e02", "\u9ec4\u5c71\u5e02", "\u6ec1\u5dde\u5e02", "\u961c\u9633\u5e02", "\u5bbf\u5dde\u5e02", "\u5de2\u6e56\u5e02", "\u516d\u5b89\u5e02", "\u4eb3\u5dde\u5e02", "\u6c60\u5dde\u5e02", "\u5ba3\u57ce\u5e02"]
}, {
    "province": "\u798f\u5efa\u7701",
    "city": ["\u798f\u5dde\u5e02", "\u53a6\u95e8\u5e02", "\u8386\u7530\u5e02", "\u4e09\u660e\u5e02", "\u6cc9\u5dde\u5e02", "\u6f33\u5dde\u5e02", "\u5357\u5e73\u5e02", "\u9f99\u5ca9\u5e02", "\u5b81\u5fb7\u5e02"]
}, {
    "province": "\u6c5f\u897f\u7701",
    "city": ["\u5357\u660c\u5e02", "\u666f\u5fb7\u9547\u5e02", "\u840d\u4e61\u5e02", "\u4e5d\u6c5f\u5e02", "\u65b0\u4f59\u5e02", "\u9e70\u6f6d\u5e02", "\u8d63\u5dde\u5e02", "\u5409\u5b89\u5e02", "\u5b9c\u6625\u5e02", "\u629a\u5dde\u5e02", "\u4e0a\u9976\u5e02"]
}, {
    "province": "\u5c71\u4e1c\u7701",
    "city": ["\u6d4e\u5357\u5e02", "\u9752\u5c9b\u5e02", "\u6dc4\u535a\u5e02", "\u67a3\u5e84\u5e02", "\u4e1c\u8425\u5e02", "\u70df\u53f0\u5e02", "\u6f4d\u574a\u5e02", "\u6d4e\u5b81\u5e02", "\u6cf0\u5b89\u5e02", "\u5a01\u6d77\u5e02", "\u65e5\u7167\u5e02", "\u83b1\u829c\u5e02", "\u4e34\u6c82\u5e02", "\u5fb7\u5dde\u5e02", "\u804a\u57ce\u5e02", "\u6ee8\u5dde\u5e02", "\u83cf\u6cfd\u5e02"]
}, {
    "province": "\u6cb3\u5357\u7701",
    "city": ["\u90d1\u5dde\u5e02", "\u5f00\u5c01\u5e02", "\u6d1b\u9633\u5e02", "\u5e73\u9876\u5c71\u5e02", "\u5b89\u9633\u5e02", "\u9e64\u58c1\u5e02", "\u65b0\u4e61\u5e02", "\u7126\u4f5c\u5e02", "\u6fee\u9633\u5e02", "\u8bb8\u660c\u5e02", "\u6f2f\u6cb3\u5e02", "\u4e09\u95e8\u5ce1\u5e02", "\u5357\u9633\u5e02", "\u5546\u4e18\u5e02", "\u4fe1\u9633\u5e02", "\u5468\u53e3\u5e02", "\u9a7b\u9a6c\u5e97\u5e02"]
}, {
    "province": "\u6e56\u5317\u7701",
    "city": ["\u6b66\u6c49\u5e02", "\u9ec4\u77f3\u5e02", "\u5341\u5830\u5e02", "\u5b9c\u660c\u5e02", "\u8944\u6a0a\u5e02", "\u9102\u5dde\u5e02", "\u8346\u95e8\u5e02", "\u5b5d\u611f\u5e02", "\u8346\u5dde\u5e02", "\u9ec4\u5188\u5e02", "\u54b8\u5b81\u5e02", "\u968f\u5dde\u5e02", "\u6069\u65bd\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde", "\u7701\u76f4\u8f96\u884c\u653f\u5355\u4f4d"]
}, {
    "province": "\u6e56\u5357\u7701",
    "city": ["\u957f\u6c99\u5e02", "\u682a\u6d32\u5e02", "\u6e58\u6f6d\u5e02", "\u8861\u9633\u5e02", "\u90b5\u9633\u5e02", "\u5cb3\u9633\u5e02", "\u5e38\u5fb7\u5e02", "\u5f20\u5bb6\u754c\u5e02", "\u76ca\u9633\u5e02", "\u90f4\u5dde\u5e02", "\u6c38\u5dde\u5e02", "\u6000\u5316\u5e02", "\u5a04\u5e95\u5e02", "\u6e58\u897f\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde"]
}, {
    "province": "\u5e7f\u4e1c\u7701",
    "city": ["\u5e7f\u5dde\u5e02", "\u97f6\u5173\u5e02", "\u6df1\u5733\u5e02", "\u73e0\u6d77\u5e02", "\u6c55\u5934\u5e02", "\u4f5b\u5c71\u5e02", "\u6c5f\u95e8\u5e02", "\u6e5b\u6c5f\u5e02", "\u8302\u540d\u5e02", "\u8087\u5e86\u5e02", "\u60e0\u5dde\u5e02", "\u6885\u5dde\u5e02", "\u6c55\u5c3e\u5e02", "\u6cb3\u6e90\u5e02", "\u9633\u6c5f\u5e02", "\u6e05\u8fdc\u5e02", "\u4e1c\u839e\u5e02", "\u4e2d\u5c71\u5e02", "\u6f6e\u5dde\u5e02", "\u63ed\u9633\u5e02", "\u4e91\u6d6e\u5e02"]
}, {
    "province": "\u5e7f\u897f",
    "city": ["\u5357\u5b81\u5e02", "\u67f3\u5dde\u5e02", "\u6842\u6797\u5e02", "\u68a7\u5dde\u5e02", "\u5317\u6d77\u5e02", "\u9632\u57ce\u6e2f\u5e02", "\u94a6\u5dde\u5e02", "\u8d35\u6e2f\u5e02", "\u7389\u6797\u5e02", "\u767e\u8272\u5e02", "\u8d3a\u5dde\u5e02", "\u6cb3\u6c60\u5e02", "\u6765\u5bbe\u5e02", "\u5d07\u5de6\u5e02"]
}, {
    "province": "\u6d77\u5357\u7701",
    "city": ["\u6d77\u53e3\u5e02", "\u4e09\u4e9a\u5e02", "\u7701\u76f4\u8f96\u53bf\u7ea7\u884c\u653f\u5355\u4f4d"]
}, {
    "province": "\u91cd\u5e86\u5e02",
    "city": ["\u5e02\u8f96\u533a", "\u53bf"]
}, {
    "province": "\u56db\u5ddd\u7701",
    "city": ["\u6210\u90fd\u5e02", "\u81ea\u8d21\u5e02", "\u6500\u679d\u82b1\u5e02", "\u6cf8\u5dde\u5e02", "\u5fb7\u9633\u5e02", "\u7ef5\u9633\u5e02", "\u5e7f\u5143\u5e02", "\u9042\u5b81\u5e02", "\u5185\u6c5f\u5e02", "\u4e50\u5c71\u5e02", "\u5357\u5145\u5e02", "\u7709\u5c71\u5e02", "\u5b9c\u5bbe\u5e02", "\u5e7f\u5b89\u5e02", "\u8fbe\u5dde\u5e02", "\u96c5\u5b89\u5e02", "\u5df4\u4e2d\u5e02", "\u8d44\u9633\u5e02", "\u963f\u575d\u85cf\u65cf\u7f8c\u65cf\u81ea\u6cbb\u5dde", "\u7518\u5b5c\u85cf\u65cf\u81ea\u6cbb\u5dde", "\u51c9\u5c71\u5f5d\u65cf\u81ea\u6cbb\u5dde"]
}, {
    "province": "\u8d35\u5dde\u7701",
    "city": ["\u8d35\u9633\u5e02", "\u516d\u76d8\u6c34\u5e02", "\u9075\u4e49\u5e02", "\u5b89\u987a\u5e02", "\u94dc\u4ec1\u5730\u533a", "\u9ed4\u897f\u5357\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde", "\u6bd5\u8282\u5730\u533a", "\u9ed4\u4e1c\u5357\u82d7\u65cf\u4f97\u65cf\u81ea\u6cbb\u5dde", "\u9ed4\u5357\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde"]
}, {
    "province": "\u4e91\u5357\u7701",
    "city": ["\u6606\u660e\u5e02", "\u66f2\u9756\u5e02", "\u7389\u6eaa\u5e02", "\u4fdd\u5c71\u5e02", "\u662d\u901a\u5e02", "\u4e3d\u6c5f\u5e02", "\u601d\u8305\u5e02", "\u4e34\u6ca7\u5e02", "\u695a\u96c4\u5f5d\u65cf\u81ea\u6cbb\u5dde", "\u7ea2\u6cb3\u54c8\u5c3c\u65cf\u5f5d\u65cf\u81ea\u6cbb\u5dde", "\u6587\u5c71\u58ee\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde", "\u897f\u53cc\u7248\u7eb3\u50a3\u65cf\u81ea\u6cbb\u5dde", "\u5927\u7406\u767d\u65cf\u81ea\u6cbb\u5dde", "\u5fb7\u5b8f\u50a3\u65cf\u666f\u9887\u65cf\u81ea\u6cbb\u5dde", "\u6012\u6c5f\u5088\u50f3\u65cf\u81ea\u6cbb\u5dde", "\u8fea\u5e86\u85cf\u65cf\u81ea\u6cbb\u5dde"]
}, {
    "province": "\u897f\u85cf",
    "city": ["\u62c9\u8428\u5e02", "\u660c\u90fd\u5730\u533a", "\u5c71\u5357\u5730\u533a", "\u65e5\u5580\u5219\u5730\u533a", "\u90a3\u66f2\u5730\u533a", "\u963f\u91cc\u5730\u533a", "\u6797\u829d\u5730\u533a"]
}, {
    "province": "\u9655\u897f\u7701",
    "city": ["\u897f\u5b89\u5e02", "\u94dc\u5ddd\u5e02", "\u5b9d\u9e21\u5e02", "\u54b8\u9633\u5e02", "\u6e2d\u5357\u5e02", "\u5ef6\u5b89\u5e02", "\u6c49\u4e2d\u5e02", "\u6986\u6797\u5e02", "\u5b89\u5eb7\u5e02", "\u5546\u6d1b\u5e02"]
}, {
    "province": "\u7518\u8083\u7701",
    "city": ["\u5170\u5dde\u5e02", "\u5609\u5cea\u5173\u5e02", "\u91d1\u660c\u5e02", "\u767d\u94f6\u5e02", "\u5929\u6c34\u5e02", "\u6b66\u5a01\u5e02", "\u5f20\u6396\u5e02", "\u5e73\u51c9\u5e02", "\u9152\u6cc9\u5e02", "\u5e86\u9633\u5e02", "\u5b9a\u897f\u5e02", "\u9647\u5357\u5e02", "\u4e34\u590f\u56de\u65cf\u81ea\u6cbb\u5dde", "\u7518\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde"]
}, {
    "province": "\u9752\u6d77\u7701",
    "city": ["\u897f\u5b81\u5e02", "\u6d77\u4e1c\u5730\u533a", "\u6d77\u5317\u85cf\u65cf\u81ea\u6cbb\u5dde", "\u9ec4\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde", "\u6d77\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde", "\u679c\u6d1b\u85cf\u65cf\u81ea\u6cbb\u5dde", "\u7389\u6811\u85cf\u65cf\u81ea\u6cbb\u5dde", "\u6d77\u897f\u8499\u53e4\u65cf\u85cf\u65cf\u81ea\u6cbb\u5dde"]
}, {
    "province": "\u5b81\u590f",
    "city": ["\u94f6\u5ddd\u5e02", "\u77f3\u5634\u5c71\u5e02", "\u5434\u5fe0\u5e02", "\u56fa\u539f\u5e02", "\u4e2d\u536b\u5e02"]
}, {
    "province": "\u65b0\u7586",
    "city": ["\u4e4c\u9c81\u6728\u9f50\u5e02", "\u514b\u62c9\u739b\u4f9d\u5e02", "\u5410\u9c81\u756a\u5730\u533a", "\u54c8\u5bc6\u5730\u533a", "\u660c\u5409\u56de\u65cf\u81ea\u6cbb\u5dde", "\u535a\u5c14\u5854\u62c9\u8499\u53e4\u81ea\u6cbb\u5dde", "\u5df4\u97f3\u90ed\u695e\u8499\u53e4\u81ea\u6cbb\u5dde", "\u963f\u514b\u82cf\u5730\u533a", "\u514b\u5b5c\u52d2\u82cf\u67ef\u5c14\u514b\u5b5c\u81ea\u6cbb\u5dde", "\u5580\u4ec0\u5730\u533a", "\u548c\u7530\u5730\u533a", "\u4f0a\u7281\u54c8\u8428\u514b\u81ea\u6cbb\u5dde", "\u5854\u57ce\u5730\u533a", "\u963f\u52d2\u6cf0\u5730\u533a", "\u7701\u76f4\u8f96\u884c\u653f\u5355\u4f4d"]
}, {
    "province": "\u53f0\u6e7e",
    "city": ["\u53f0\u6e7e"]
}, {
    "province": "\u9999\u6e2f",
    "city": ["\u9999\u6e2f"]
}, {
    "province": "\u6fb3\u95e8",
    "city": ["\u6fb3\u95e8"]
}];

Ext.define('WeiQuPai.view.EditConsigneeForm', {
    extend: 'Ext.form.Panel',
    xtype: 'editconsigneeform',
    config: {

        scrollable: 'vertical',
        items: [{
            xtype: 'vtitlebar',
            title: '添加收货地址',
            docked: 'top',
            items: [{
                xtype: 'button',
                baseCls: 'arrow_left',
                action: 'back'
            }]
        }, {
            xtype: 'fieldset',
            cls: 'w-fieldset-full',
            items: [{
                name: 'name',
                xtype: 'textfield',
                placeHolder: '收货人',
                autoComplete: false,
            }, ]
        }, {
            xtype: 'fieldset',
            cls: 'w-fieldset-full',
            items: [{
                name: 'province',
                xtype: 'selectfield',
                placeHolder: '省份',
                autoSelect: false,
                usePicker: true,
                defaultPhonePickerConfig: {
                    doneButton: '完成',
                    cancelButton: '取消'
                }
            }, {
                name: 'city',
                xtype: 'selectfield',
                placeHolder: '城市/区域',
                autoSelect: false,
                usePicker: true,
                defaultPhonePickerConfig: {
                    doneButton: '完成',
                    cancelButton: '取消'
                }
            }, {
                name: 'address',
                xtype: 'textfield',
                placeHolder: '详细地址',
                autoComplete: false
            }, ]
        }, {
            xtype: 'fieldset',
            cls: 'w-fieldset-full',
            items: [{
                name: 'mobile',
                xtype: 'textfield',
                placeHolder: '联系电话',
                autoComplete: false
            }, {
                name: 'email',
                xtype: 'textfield',
                placeHolder: '电子邮件',
                autoComplete: false
            }, {
                name: 'zip',
                xtype: 'textfield',
                placeHolder: '邮编',
                autoComplete: false
            }]
        }, {
            name: 'uc_id',
            xtype: 'hiddenfield'
        }, {
            xtype: 'button',
            text: '修改',
            baseCls: 'w-button',
            action: 'update'
        }]
    },

    initialize: function() {
        var store = Ext.create('Ext.data.Store', {
            fields: ['text', 'value']
        });
        for (var i = 0; i < areaData.length; i++) {
            store.addData({
                text: areaData[i].province,
                value: areaData[i].province
            });
        }
        var province = this.down('selectfield[name=province]');
        province.setStore(store);
        province.on('change', this.changeCity, this);
        this.down('textfield[name=name]').on('keyup', this.setButtonState, this);
        this.down('textfield[name=address]').on('keyup', this.setButtonState, this);
        this.down('textfield[name=mobile]').on('keyup', this.setButtonState, this);
        province.on('change', this.setButtonState, this);
        this.down('selectfield[name=city]').on('change', this.setButtonState, this);

        //fix 红米上弹层不能消失的问题
        if (Ext.os.is.android) {
            this.down('selectfield[name=province]').getPhonePicker().show = WeiQuPai.Util.slideUp;
            this.down('selectfield[name=province]').getPhonePicker().hide = WeiQuPai.Util.slideDown;
            this.down('selectfield[name=city]').getPhonePicker().show = WeiQuPai.Util.slideUp;
            this.down('selectfield[name=city]').getPhonePicker().hide = WeiQuPai.Util.slideDown;
            this.down('selectfield[name=province]').on('focus', function() {
                this.enableAll(false);
            }, this);
            this.down('selectfield[name=province]').on('change', function() {
                this.enableAll(true);
            }, this);
            this.down('selectfield[name=city]').on('focus', function() {
                this.enableAll(false);
            }, this);
            this.down('selectfield[name=city]').on('change', function() {
                this.enableAll(true);
            }, this);
        }
    },


    enableAll: function(bool) {
        var me = this;
        var f = function() {
            me.query('textfield').forEach(function(f) {
                f.setDisabled(!bool);
            });

        }
        bool ? setTimeout(f, 300) : f();
    },

    changeCity: function(comp, newValue) {
        var store = Ext.create('Ext.data.Store', {
            fields: ['text', 'value']
        });
        var idx = comp.getStore().indexOf(comp.getRecord());
        city = areaData[idx].city;
        for (var i = 0; i < city.length; i++) {
            store.addData({
                text: city[i],
                value: city[i]
            });
        }
        this.down('selectfield[name=city]').setStore(store);

    },

    setButtonState: function() {
        var disabled = !this.down('textfield[name=name]').getValue() || !this.down('selectfield[name=province]').getValue() || !this.down('selectfield[name=city]').getValue() || !this.down('textfield[name=mobile]').getValue();
        !this.down('textfield[name=address]').getValue()
        this.down('button[action=update]').setDisabled(disabled);
    }
});