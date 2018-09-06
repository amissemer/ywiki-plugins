# Batch remove restrictions in a wiki space

1. Open https://wiki11.ea-webapps.fra.hybris.com/pages/listpermissionpages.action?key=servportfolio
2. Run

```
(async list => {
    let total = list.length;
    for (let i = 0;i<total;i++) {
        let it = list[i];
        let url = $(it).attr("href");
        try {
            await $.get( url );
            console.log(`Removed one, ${total-i-1} left`);
        } catch (e) {
            console.error(`Error for ${url}: ${e}\n${total-i-1} left`);
        }
    }
    console.log(`All done`);
})( $('img[title="Remove Restrictions"]').parent().toArray() )
```
3. Repeat for all pages
