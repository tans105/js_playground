appModule.directive('itemWidget', [function() {
    return {
        templateUrl: 'components/item-widget/item-widget.html',
        restrict: 'EA',
        scope: {
            item: '=',
            promo: '@',
            pickMe: '&onSelect'
        }
    }
}]);