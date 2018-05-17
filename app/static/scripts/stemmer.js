//From https://github.com/kristopolous/Porter2-Stemmer
/*
Copyright (c) 2012, various,
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of the <organization> nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

var stemmer=function(){function i(){}function j(){console.log(Array.prototype.slice.call(arguments).join(" "))}var k={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},l={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""};return function(a,m){var d,c,g,b,h,e,f=a;e=m?j:i;if(3>a.length)return a;
g=a.substr(0,1);"y"==g&&(a=g.toUpperCase()+a.substr(1));b=/^(.+?)(ss|i)es$/;c=/^(.+?)([^s])s$/;b.test(a)?(a=a.replace(b,"$1$2"),e("1a",b,a)):c.test(a)&&(a=a.replace(c,"$1$2"),e("1a",c,a));b=/^(.+?)eed$/;c=/^(.+?)(ed|ing)$/;b.test(a)?(c=b.exec(a),b=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,b.test(c[1])&&(b=/.$/,a=a.replace(b,""),e("1b",b,a))):c.test(a)&&(c=c.exec(a),d=c[1],c=/^([^aeiou][^aeiouy]*)?[aeiouy]/,c.test(d)&&(a=d,e("1b",c,a),c=/(at|bl|iz)$/,h=/([^aeiouylsz])\1$/,d=/^[^aeiou][^aeiouy]*[aeiouy][^aeiouwxy]$/,
c.test(a)?(a+="e",e("1b",c,a)):h.test(a)?(b=/.$/,a=a.replace(b,""),e("1b",h,a)):d.test(a)&&(a+="e",e("1b",d,a))));b=/^(.*[aeiouy].*)y$/;b.test(a)&&(c=b.exec(a),d=c[1],a=d+"i",e("1c",b,a));b=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;b.test(a)&&(c=b.exec(a),d=c[1],c=c[2],b=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,b.test(d)&&(a=d+k[c],e("2",b,a)));b=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
b.test(a)&&(c=b.exec(a),d=c[1],c=c[2],b=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,b.test(d)&&(a=d+l[c],e("3",b,a)));b=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;c=/^(.+?)(s|t)(ion)$/;b.test(a)?(c=b.exec(a),d=c[1],b=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,b.test(d)&&(a=d,e("4",b,a))):c.test(a)&&(c=c.exec(a),d=c[1]+c[2],c=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,
c.test(d)&&(a=d,e("4",c,a)));b=/^(.+?)e$/;if(b.test(a)&&(c=b.exec(a),d=c[1],b=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,c=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$/,h=/^[^aeiou][^aeiouy]*[aeiouy][^aeiouwxy]$/,b.test(d)||c.test(d)&&!h.test(d)))a=d,e("5",b,c,h,a);b=/ll$/;c=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/;b.test(a)&&c.test(a)&&(b=/.$/,a=a.replace(b,""),e("5",
b,c,a));"y"==g&&(a=g.toLowerCase()+a.substr(1));g={skis:"ski",skies:"sky",dying:"die",lying:"lie",tying:"tie",idly:"idl",gently:"gentl",ugly:"ugli",early:"earli",only:"onli",singly:"singl"};g[f]!=={}[f]&&(a=g[f],e("Special Word",a));-1!=="sky news howe atlas cosmos bias          andes inning outing canning herring          earring proceed exceed succeed".indexOf(f)&&(a=f,e("Special Word",a));b=/.*generate?s?d?(ing)?$/;b.test(f)&&(a+="at",e("Overstemmed",a));b=/.*general(ly)?$/;b.test(f)&&(a+="al",
e("Overstemmed",a));b=/.*generic(ally)?$/;b.test(f)&&(a+="ic",e("Overstemmed",a));b=/.*generous(ly)?$/;b.test(f)&&(a+="ous",e("Overstemmed",a));b=/.*communit(ies)?y?/;b.test(f)&&(a+="iti",e("Overstemmed",a));return a}}();
