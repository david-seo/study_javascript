describe ( 'upperFilter 테스트' , function () {
    beforeEach (module ( 'myApp' ));
 
    var  $filter;
    beforeEach (inject ( function (_$filter_) {
        $filter = _$filter_;
    }));
    it ( '입력 한 문자열을 대문자로 변환된다' , function ($filter) {
        var  upperFilter = $filter ( 'upperFilter' );
        expect (upperFilter( 'hello, world!' )).toEqual( 'HelLO, WoRlLD!' );
    });
});
