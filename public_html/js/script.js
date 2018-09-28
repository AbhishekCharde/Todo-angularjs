var todo=angular
.module("myApp",[])
.controller("shoppingController",function($scope){
  $scope.items = [{todoText:'Clean House', done:false}];
  
  $scope.AddItem = function() {  
    if(!$scope.listItem) {
      $scope.errorMsg="Ohh!! Nothing to add!!";
      return;
    };
    if($scope.items.indexOf($scope.listItem)== '-1'){
      $scope.items.push({todoText:$scope.listItem, done:false});
      $scope.listItem="";
      $scope.errorMsg="";
    } else {
      $scope.errorMsg="Item already Exist!!";
    }
  };
  
     
   $scope.remove = function() {
       
      
        var oldList = $scope.items;
        $scope.items = [];
        $scope.errorMsg1="Select atleast one item";
        
        $scope.msg2=oldList.length;
        angular.forEach(oldList, function(x) {
            if (!x.done) {
                $scope.items.push(x);                
            }else{
                $scope.errorMsg1="";
            };
        });
    };
    $scope.check = function(){
        if( $scope.items.length == 0 ){
            $scope.errorMsg1="";
            $scope.errorMsg2=" Add atleast one";
        }
    };
    
    $scope.checkhide =function (){
      if ( $scope.items.length  !==0){
          $scope.errorMsg2="";
      }  
    };
    $scope.checked = function (){
        var count = 0;
        angular.forEach($scope.items,function(todo){
        if(todo.done == 1){
            count +=1;
        } 
        if(count > 0){
            $scope.errorMsg1="";
        } 
        });
  };
 
   
});