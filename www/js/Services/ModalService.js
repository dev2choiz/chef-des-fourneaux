
chefdesfourneaux.service('ModalService', function($http, $ionicModal ){
//tic
//tac

	function setModal(template, scop, animation  ){
		$ionicModal.fromTemplateUrl(""+template, {
		    scope: scop,
		    animation: animation		//'slide-in-up'
		}).then(function(modal) {
		    $scope.modal = modal;
		});
	};








	return ({
		setModal 					: setModal

	});




})