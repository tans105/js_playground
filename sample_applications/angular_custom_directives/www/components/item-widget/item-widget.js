appModule.directive('itemWidget', [function() {
    return {
        templateUrl: 'components/item-widget/item-widget.html',
        restrict: 'EA',
        replace: 'true',
        scope: {
            item: '=',
            promo: '@',
            pickMe: '&onSelect'
        },
        link: function(scope, element, attrs) {
            //Add event listener for 'click' event
            element.on('click', function(event) {

                element.html('Thanks for buying this item.');
                element.css({
                    color: 'green'
                });
            });
        }
    }
}]);