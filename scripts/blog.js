const blogConsts = [
    {
        imgSrc: "images/blog-1.jpg",
        imgAlt: "a person holding a dog looks into a canyon",
        header: "Traveling with Your Dog",
        paragraph: `Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem
        quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium
        hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium
        faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.
        Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con
        et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad
        qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam
        voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit
        ulparume nonseca estorer spernam.`
    },
    {
        imgSrc: "images/blog-2.jpg",
        imgAlt: "a person holding the leashes of four dogs",
        header: "How to Walk Multiple Dogs",
        paragraph:`Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem
        quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium
        hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium
        faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.
        Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con
        et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad
        qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam
        voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit
        ulparume nonseca estorer spernam.`
    },
    {
        imgSrc: "images/blog-3.jpg",
        imgAlt: "a person prepares to throw a ball for a dog to catch",
        header: "Teach Your Dog To Fetch",
        paragraph:`Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem
        quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium
        hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium
        faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.
        Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con
        et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad
        qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam
        voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit
        ulparume nonseca estorer spernam.`
    }
]

const blogs = document.getElementById("blogs");

blogConsts.forEach((blog) => {
    //Create the article for each blog
    const blogArticle = document.createElement("article");
    blogArticle.className = "blog"
    blogs.appendChild(blogArticle);

    //Add the image for each blog
    const blogImg = document.createElement("img");
    blogImg.setAttribute("src", blog.imgSrc);
    blogImg.setAttribute("alt", blog.imgAlt);
    blogArticle.appendChild(blogImg);

    //Create the div to hold header and text
    const blogDiv = document.createElement("div");
    blogArticle.appendChild(blogDiv);

    //Add in the header
    const blogHeader = document.createElement("h4");
    blogHeader.className = "title"
    blogHeader.textContent = blog.header;
    blogDiv.appendChild(blogHeader);

    //Add in the text
    const blogText = document.createElement("p");
    blogText.textContent = blog.paragraph;
    blogDiv.appendChild(blogText);
});