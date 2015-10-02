
angular.module('MyApp', [])
.controller('MyController', function () {
    var self = this;
        self.userObjectSelection=0;
        self.idx = 0;
        self.text = '';
        self.choices = ['NONE','SUCCESS','SKY','WARNING','DANGER','NIGHT'];
        self.bodyColor = ['white','lightgreen','lightblue','lightyellow','pink','lightgray'];
        self.div1Color = ['gray','darkgree ','darkblue','brown','darkred','black'];
        self.div2Color = ['lightgray','green','blue','yellow','red','midnightblue'];
        self.fontColor = ['black','white','white','black','white','white'];
        self.categories = {
            Personal:['tv'],
            Work:['meeting'],
            Trip:['ny','boston']
        };
        self.showFolder = function(){
            if(self.collaps) return 'glyphicon glyphicon-folder-close';
            else return 'glyphicon glyphicon-folder-open';
        };

        self.addContent = function(idx,content){
            if(idx==0)
                self.categories.Personal.push(content);
            if(idx==1)
                self.categories.Trip.push(content);
            if(idx==2)
                self.categories.Work.push(content);
            self.text = '';
        };
});