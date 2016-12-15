"use strict"
$(document).ready(function () {
    var btn = $(".form_b button:first");
    var otr = $(".table tr");
    var odel = $(".del");
    var oalt = $(".alter");
    var ocha = $(".cha");
    var osta = $(".state");
    var on = true;



    //点击删除按钮删除当前行
    for (var i = 0, j=odel.length; i < j; i++) {
        odel[i].index = i;
        odel[i].onclick = function () {
            event.preventDefault();
            otr[this.index + 1].style.display = 'none';
        }
    };

    //组织修改a标签默认行为
    for (var i = 0, j=oalt.length; i < j; i++) {
        oalt[i].onclick = function () {
            event.preventDefault();
        }
    };
    //点击封存/启封按钮改变状态
    for (var i = 0, j=odel.length; i < j; i++) {
        var a = '封存';
        var b = '启封';
        ocha[i].index = i;
        ocha[i].onclick = function () {
            console.log(123);
            event.preventDefault();
            if (on) {
                osta[this.index].innerHTML = a;
                ocha[this.index].innerHTML = b;
                on = false;
            }else {
                osta[this.index].innerHTML = b;
                ocha[this.index].innerHTML = a;
                on = true;
            }

        }
    };
    //select2控件控制宽度
    $(".select").select2({
        width: '100px'
    });

    //时间控件本地设置
    $(".start").daterangepicker({
        maxDate:new Date(),
        locale:{
            applyLabel: '确认',
            cancelLabel: '取消',
            fromLabel: '从',
            toLabel: '到',
            weekLabel: 'W',
            customRangeLabel: 'Custom Range',
            daysOfWeek:["日","一","二","三","四","五","六"],
            monthNames: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
        }
    });

    //设置datatables
    $(".table").DataTable({
        "sPaginationType" : "full_numbers",
        "oLanguage" : {
            "sLengthMenu": "每页显示 _MENU_ 条记录",
            "sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
            "sInfoEmpty": "没有数据",
            "sInfoFiltered": "(从 _MAX_ 条数据中检索)",
            "sZeroRecords": "没有检索到数据",
            "sSearch": "名称:",
            "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "前一页",
                "sNext": "后一页",
                "sLast": "尾页"
            }
        }
    });


})
