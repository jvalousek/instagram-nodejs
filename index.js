let Instagram = require('instagram-nodejs-without-api');
Instagram = new Instagram()

Instagram.getCsrfToken().then((csrf) =>
{
    Instagram.csrfToken = csrf;
}).then(() =>
{
    return Instagram.auth('wakeandfun90', 'OtarDexo7').then(sessionId =>
    {
        Instagram.sessionId = sessionId

        /*
        // 290141387
        return Instagram.commonSearch('Treboutice WAKE').then((r) =>
        {
            let locationId = r;
            console.log(locationId);


        })
        */
        /*
                let locationId = '290141387';
                Instagram.searchBy('location', locationId, '0', 12).then(r => console.log(r))
        */
        /*return Instagram.searchBy('hashtag', 'wakeandfun').then((t) =>
            {
                console.log(t); // - instagram followers for user "username-for-get"
            })*/

        /*
        return Instagram.getUserDataByUsername('jvalousek').then((t) =>
        {
            return Instagram.getUserFollowers(t.graphql.user.id).then((t) =>
            {
                console.log(t); // - instagram followers for user "username-for-get"
            })
        })
        */


        /*
        return Instagram.commonSearch('Prague').then(r =>
        {
            //get location id for Kyiv
            let locationId = r.places[0].place.location['pk']
            //search posts from Kyiv
            Instagram.searchBy('location', locationId, '0', 12).then(r => console.log(r))
        })
        //search posts by hashtag "Eurovision"
        Insta.searchBy('hashtag', 'Eurovision').then(r => console.log(r))
        */
    })
}).catch(console.error);