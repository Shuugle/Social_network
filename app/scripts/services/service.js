//js/services/todos.js
angular.module('socialNetServiceApp', [])

//super simple service
//each function returns a promise object 

/*.factory('loginSignupService', function($http) {
	return {
		
		create : function(newUserData) {
			console.log("Service"+JSON.stringify(newUserData));
			return $http.post('/createUser', newUserData);
		}
	}
})*/

.factory('UserService', function($http) {
	return {
		
		create : function(userData) {
			console.log("Service"+JSON.stringify(userData));
			return $http.post('/signUpNewUser', userData);
		},
		get : function() {
			return $http.get('/getAllUserInfo');
		},
		remove : function(id){
			console.log("delUser",id);
			 return $http.delete('/deleteUserInfo/'+ id);
		 },
		 postLogin : function(loginData) {
				console.log("Service"+JSON.stringify(loginData));
				return $http.post('/authenticate', loginData);
			}
	}
})



.factory('productService', function($http){
return {
	create : function(productData){
		return $http.post('/createProductInfo', productData);
	},
	get : function(){
		return $http.get('/getAllProductInfo');
		},
	getProductById : function(id){
		console.log(id);
		return $http.get('/getOneProductInfo/'+ id);
		
	},
	update : function (id, productData){
		console.log(id);
		console.log(productData);
		return $http.put('/updateProductInfo/'+ id, productData);
	},
	 remove : function(id){
		 return $http.delete('/deleteProductInfo/'+ id);
	 }
}
	
})


.factory('schoolService', function($http){
return{
	create : function(schoolInfoData){
		console.log("school",schoolInfoData)
		return $http.post('/createSchoolInfo', schoolInfoData);
	},
	get : function(){
		return $http.get('/getAllSchoolInfo');
		},
	getSchoolInfoById : function(id){
		console.log(id);
		return $http.get('/getOneSchoolInfo/'+ id);
		
	},
	update : function (id, schoolInfoData){
		console.log(id);
		console.log(schoolInfoData);
		return $http.put('/updateSchoolInfo/'+ id, schoolInfoData);
	},
	 remove : function(id){
		 return $http.delete('/deleteSchoolInfo/'+ id);
	 },
	 createDonation : function(DonationData){
			console.log("school",DonationData)
			return $http.post('/saveSchoolDonation', DonationData);
		},
		getJsonData : function(){
			return $http.get('/getAllSchoolJsonData');
			}
};


})

.factory('orderProductService', function($http){
return{
	 getSchoolInfo : function(id){
			return $http.get('/getOneSchoolInfo/'+ id);
	 },
	 createOrder : function(orderData){
			return $http.post('/createOrderInfo', orderData);
	 },
	 create : function(searchProductData){
			if(angular.isUndefined(searchProductData.fullName) || searchProductData.fullName == ''){
				searchProductData.fullName="";
			}
			return $http.post('/searchProduct/', searchProductData);
			},
	 get : function(){
			return $http.get('/getAllOrderInfo');
			},
};
})


.factory('feedBackSercive', function($http){
return{
	
	 create: function(feedBackData){
		 return $http.post('/createFeedBack', feedBackData);
	 },
	 get : function(id){
			return $http.get('/getFeedBack/' + id);
		},	
};


});
