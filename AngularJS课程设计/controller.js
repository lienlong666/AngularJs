var app=angular.module("myapp",[]);
app.controller("mainctrl",function($scope){
     $scope.message={'name':'liwenlong','introduce':'学渣一枚','location':'石家庄','pic':'images/1.jpg','zan':15,'fans':20};

     $scope.fans=[
         {'name':'小王','introduce':'设计师，博客','pic':'images/a1.jpg'},
         {'name':'小李','introduce':'作家，编辑','pic':'images/a5.jpg'},
         {'name':'李小明','introduce':'艺术总监，电影剪辑','pic':'images/a6.jpg'},
         {'name':'赵大成','introduce':'音乐家，运动员','pic':'images/a4.jpg'},
         {'name':'岳岳岳','introduce':'摄影师，游戏控','pic':'images/a2.jpg'}
     ];

     $scope.danamic=[
         {'name':'小鱼儿','pic':'images/a9.jpg','content':'今天天气好好啊','time':'现在','contentpic':'images/c4.jpg'},
         {'name':'帕金斯','pic':'images/a7.jpg','content':'日动影移，日穿帘隙，时间悄无声息地离去。','time':'3h ago',
         'contentpic':'images/c5.jpg'},
         {'name':'叫我大帅柯','pic':'images/a8.jpg','content':'这世界上的很多事，有时候和我们眼睛看到的不一样。...',
         'time':'1h ago','contentpic':'images/c1.jpg'}
     ];

     $scope.reply=[
         {'name':'大张力','pic':'images/a3.jpg','content':'希望你每天都能快乐','time':'10m ago'},
         {'name':'黄小明','pic':'images/a4.jpg','content':'我只是路过而已...','time':'1h ago'}
     ];

     $scope.nav=[
          {'name':'首页','class':'glyphicon glyphicon-home'},
          {'name':'简介','class':'glyphicon glyphicon-file'},
          {'name':'信息','class':'glyphicon glyphicon-envelope'},
          {'name':'操作','class':'glyphicon glyphicon-cog'}
     ];

})
