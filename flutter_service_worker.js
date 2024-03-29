'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "17817945740eb766a6c019dab1f65840",
"index.html": "5f6a0ad3c1879c6ca363ea11539363af",
"/": "5f6a0ad3c1879c6ca363ea11539363af",
"main.dart.js": "c75c5379b05151a871d75bd2495a272e",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7fa613defe47784d8281d7a3ce2c6538",
".git/config": "032495542cec0c8cfbed97e0ac5f8ea6",
".git/objects/0d/e9870612f4e9e520739e9b7724d94cefa97506": "69895752cf3bca96fbaec3b93b3a38bd",
".git/objects/95/cae23d80ca3e127784b2a6dfb8e01ead784888": "ebe71da0fd7a7eebb2db7d6a1d6c08b8",
".git/objects/92/914c5bab5ca82c3038323ce177c264e1a057be": "3024ca7ced25c3817fbbc4a9936f648e",
".git/objects/92/f538485e5ebcd9a44ec0a41c5f3a87ede2ffbd": "c31e8f61c98a9767835453d3a58d37ea",
".git/objects/66/f1933e524473072b4226a4097656fe5b010ac2": "04f92bb69041bc949b07062187245235",
".git/objects/3e/21baff10c6da7379ae5a489fb009ab34304a3f": "dd17434083af14c1457cd250769083d5",
".git/objects/3b/7081e601ed21a27a151e6684d3d25a4974a535": "e0ea5bc08b445b7099f8c5510b4f5349",
".git/objects/3b/4718382142ad7920c9086ae088e4bdecf8cc0b": "241ebf8b41a4dc330ff243414b34b0a1",
".git/objects/6f/f73b7a612e856667b4ca88f091699fca891c7f": "ff7c8d1ef3a7bacf2e0bf47eef096238",
".git/objects/6f/f851195eaf1ad73a9b330a4d21d1440bfddba4": "cfdfba745c25d9371cd38e6909f5301f",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9b/73b5846cc02189ebddc1368a7f06e3c921945d": "3879fe9080f9541edb9206d97a86b3f7",
".git/objects/9b/cd199426bf96a82a17512e50b61e1f07a1418a": "524ee3288eae73403360e5b7083e5c18",
".git/objects/9b/315348ce87391bce379e1a7fd0a37b793eb17f": "aeaab93e737c1a8ffd2b228efe57a37e",
".git/objects/9e/9c8f62e80c9846bfea41b7bdb18393773635e8": "32317eb879c307fc9ae3090a312e4029",
".git/objects/9e/9aef7e295225c44bd5616cba5e831751484002": "9cd739fe4bd9af27c71c3f95ac3fc07b",
".git/objects/04/03c82966c46e309138f090623fe98b4030690a": "c9c88586da8baeaf69ff16c10f2bc283",
".git/objects/6a/0810e92abde0c319db62059fda0a7b9f49f79f": "1c0ecb4ffd50c6a0d37fecab6fb00045",
".git/objects/32/f119c8a73a86d9016466da1a5c52040f6a1288": "652630c5af354792759f281abc8059f4",
".git/objects/32/3a488edc6d936a71644866d0540dbdb024829c": "a0298829936fc960490bdd80847d946b",
".git/objects/35/1a160efdc575b0aa4b3477fb278cee6227a637": "8b7a41612f73a37215d63a5b4669717e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/d04820d761295e445c8d53c1e447c42fa1d26d": "c70c5a3a4639ee8b5c2c53d7dbca025d",
".git/objects/69/b7f86d97dbcfff120ccd67dcc1442c7ebf0ba5": "af331e8400d1e50fbe081c225cf587a1",
".git/objects/3c/abb1b89ba728e519d6569aa220768b4bab0d25": "2c6a33cf16f62f15bd577648a51de5e3",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/3d/44aba1f18f300ce76111ce26bb4e9ff8f80cb3": "bcac87cd565a108dfa95ac42cd00ad99",
".git/objects/3d/083b410750e5b7db30cd06d8816cace5074522": "488766f064ef0dac421891684b67ce6c",
".git/objects/58/3902df0ab42f78b328a2533c39557c5e5eb335": "d45579dea5beee9feb185a3e84ffb8d3",
".git/objects/58/ae297c2b453250ad8a83d949f0877a3f5e6223": "341234002117cb4f6f00c87badb9f7f2",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/eb773c1d56e2ca33d9250f414935ccf84adac1": "27b3172ebb4ce8ada766a717ea4b05f0",
".git/objects/93/10830cc35ad7cd3c68b6678820ad8681ed263b": "efe145a8e5dff38b1ddffe9154cbd380",
".git/objects/94/676da81a0f49698ce1f7be9e26ede45c59a779": "95e7fa62392e623c6f8a10f8543e1b28",
".git/objects/94/f3f18141e22b6e8d5b9feb75fcfead795a26db": "2dd4706757b71e372815d3bd7020f03f",
".git/objects/94/5b87b8f56b6931972c9f89d48bb1f06ccf10e9": "6cd4d6fc78d98dff37b2c75e98cc2e18",
".git/objects/0e/a0e3ce38738de2502ab00563c0186f64b0b385": "b571a47bedad6ce04f97f15f2d161f1e",
".git/objects/5a/9d2a6ea7b16d3faead082b1917e07f90e3dc53": "7ec99c6efdbbeab9678bd563ad0554e5",
".git/objects/5a/0300652f1cad3fc626a70d71dbad5c50266c6a": "e00b9eb499aafd8cc6d79d61afcc8208",
".git/objects/33/3a897f242c6b6a3c22bfcfedc5cb58e1f023e5": "964920aa43824faf2b0a4432a073233f",
".git/objects/05/c007ebc42c4b7eeee681d36b05bde5b7b77bd9": "80a5aade0f2c14d9f53660e47fd2f9c2",
".git/objects/9d/d64aca09d026fc0522f4b357ea509ca25336b8": "7988bda7c385d67187164d64ffdb69b3",
".git/objects/9d/0a3acd978371b8cc9f7b48a9bfde6ae1de0cc6": "2f622ef1d6e51108e73a07d1b7c974b1",
".git/objects/9c/d7fc46070491473b2d6db02cb5988fe178d2ad": "55318407f806df89952a68e751d97f29",
".git/objects/a3/37597fe438d5082fb130fee21f177406063e28": "d1ccc49b6f87c6e240b482bcb90a4f1f",
".git/objects/a3/15ca3244f1a53ebed2efa181c6fe27c58cebb8": "b89dde0a8550229b8d0df1701fa6a290",
".git/objects/b5/46d6838531cdc66fcb8605e3d9f1a820ac60b3": "9af34b9eff872e2a9efacaa4b199d494",
".git/objects/b5/36221e9eb56597158f44652534cc84d6dc9de4": "8b8bfc6defd3ad279f87056eaa8b37df",
".git/objects/b5/2980e64b18ea0a91a6e42407bac1dbba031d3e": "44fea2f54267fe7eb9685c59bbad5b7f",
".git/objects/b5/55a3c55f673e8ecf4b63e9f0eae13decd64db5": "e58ad1aa92cd8ed8f3bae19768b321df",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/5d285e8d4c7cdd55fe3fe9a39b211f3198e36f": "cbd3d3c19662da36faf9013627b36f8d",
".git/objects/d9/56d1caaabbeee20c9cb4d262012a791addb65f": "72ef19bfe3c35618dc1225e86c37c307",
".git/objects/ac/f7dbaf7f7db802ccaab01c46fa9d787faef266": "c849589ac52b2174587ea2ce071297cf",
".git/objects/ac/1f1fe91523687ea315192e7b227563d85d640c": "e35d9ac010d81c892c2fd4f5aa89620b",
".git/objects/bb/265618c5f93038f25277cc5cef8acd30ec5ef3": "57ecc24fbb86b5b163d426bbd0f947c0",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/89a5e307961f2f73e857cb7785903ec530d36c": "c6059ff51fe4773e5fcb049124007414",
".git/objects/d7/0dd937057fc104eba008bc38534da584e8d425": "2bc0d60bf8822ee64ec465d8db393272",
".git/objects/d7/87d28654511c3a2e4abc5d540b3e7f3257ace0": "722efb03e1ca93c59821a27a0459a68d",
".git/objects/d0/e8954760ed81c8d13b8d050ab4085097f3da1b": "def28ad742834680974a6ac80724a4f8",
".git/objects/be/2b61518238c158b4482a0b0dc57f2ec6aa0f75": "cc33066e1c64c46cb408a75876fef454",
".git/objects/df/69c9aed5ff88f167b5731616d8fba63cb2eb2e": "ea07518bbbc9be1a320ef6c10eee744c",
".git/objects/df/51e2407eaed1342bf7ac0b0e3481d320fc1b38": "90a48d00d8f596787257c474c27f03b3",
".git/objects/df/3486b9c157b9cdd23326a7df53dd6bdf4a05d5": "9900ed21ca737386f2dafedeee27330d",
".git/objects/df/1d8f122f3b2eef81ebcfb40385db7ac7b9c7de": "58540f58b532e253f2c671d1313076a5",
".git/objects/df/ce8786c16feb051d95f6f6a4ea71bf46e3321a": "4765d0d519af9676ef64baec234e594a",
".git/objects/df/fc53f718468d41e4e36539326ed675ac3b5a1c": "9550f661db14018d804af7a35884e933",
".git/objects/df/7377f79aa049ec681f8bd48188ed4508716866": "9f66c3bf31425c047f380c7fab12b6bd",
".git/objects/da/6118f74ebaf206affb0f0bcb98b9f171be614d": "fae0a1e1d61a7857345db7fbdfdc6d13",
".git/objects/da/33efd45ff9e5cc03ecab6d548bcf6b8a2f3389": "98bfe52faf97ce76a8624834e9cb8b4a",
".git/objects/a2/b819d5a18fba18f68b2b859d131eaaaddce5c4": "c97db6aff55592931d165f7575de33a7",
".git/objects/a5/74d79ec8caa6bba7dbd9d88ee83811cbf9e6f6": "0366068b4156f448392e9bfadad53f1f",
".git/objects/a5/fb7560de9856c2178b75d044d4c275f9723398": "d02c81e670164b01ad2bae41a5ececb9",
".git/objects/d1/0ce6c35d7b4446cd2116b3340da17b835e0cd7": "be2e6632a85de51e29c967e851581219",
".git/objects/d1/318365bc44b487a3cd103e35f3e9117f9d7ff5": "ff6726c4f265cefbaf554b83470f2727",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/92789eb495356c395eeabaf552fdfcaf741192": "2394cf99e6bfcfd50c4deb42eef12384",
".git/objects/ae/ab203c0dec0dd0ae0113a9af8f3b4d061dd22c": "e19c9ef2eec9087ef70531555a3bcdb8",
".git/objects/ae/7201fcd575ef4f584feb2e7fa9b122a1047a1b": "994fc3cbc047080345d7ec867e7fb560",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/d8/b9ed7d8edca0d9c20cee25d753298c485f4507": "b6e96adc25d7bb13ab74c91022bb7f75",
".git/objects/d8/495529512fe4699878cae396b3301221c51f2c": "99f511e11c7dca2520ae5683ce3c6f77",
".git/objects/d8/030b7c8231d8e43e4e625c82e2dee4a0d291a2": "598b9767869947b91be619a754287f41",
".git/objects/ab/8f0218c80170aefd214718da8d3a42120c22ea": "db7456337d443f0f1012fa91e974ae74",
".git/objects/e5/586ba562baccdc9f9d0999047646d2878ae6f7": "405bfc7442f94835c88cac857f401110",
".git/objects/f3/c39689328a9330ff0946cffc10aca57467d9e1": "71eda262ca6a466fbeaab45a4cd6a81c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/b18a346c54a3e111560ae70b2be6f0857ac4bb": "70a6b303b0bf5f6c5fa730fc01b8dc43",
".git/objects/c9/15eed34ac48c1dfb520822099fce61179cf9f9": "ecf8ace482fa6dccbf192651d2598ba6",
".git/objects/c9/02e95e434e53a70898b6fb2a709d195c87c23d": "fc4e1626bafe466f4c7d8fc7998588ce",
".git/objects/e3/7ae46103ac910fb28108e682bd923381651901": "542857246cc94044bcffaee47bdd9bcf",
".git/objects/cf/836fca2e63b21c6e11b8fa70c169330c869ffc": "794a15d9dba8727b3573b648c8c2a19f",
".git/objects/cf/4426bd4222e8e8cff40c3c14ae734460fe5c9a": "30cd0147b7189b30ca9f64340a5ccf15",
".git/objects/ca/e60822c1a787e84189519bcb389d4a706a69ec": "b2e0378e35bc3e739a57012d0f297430",
".git/objects/ca/5ebc443527b25a363aa8cee5a1ec593c3f6a2a": "0e879ecb73b22890dc6f4f186e1c94f7",
".git/objects/ca/15a221e887a7a0e1e7eb5a174f60ddbee96747": "0994d61441b767769d03ffc18e4a3299",
".git/objects/c8/448f1b436ce0168d83d3eafc1f0f96f717d69c": "fd17ef36e8e5666e87563991e9bbed93",
".git/objects/c1/e9055f4e9a932e7e158b546e40fcaef35fd674": "556fc3c43fa031df4c484e16d1fed2c9",
".git/objects/ec/6b4a4af74a59a5eab82962016c823374759e27": "5654fcc6692f1a636fac0fdd7811c68b",
".git/objects/18/6ad7a2ec591a579f44c91117abc1c84abbd51a": "f8727e4a64de4d48bc21aa4503439b03",
".git/objects/27/471cc784170b176bb58f4d7ef12b71a9420c45": "56dd2c326a742924f6c94fcac7924597",
".git/objects/4b/d8829589bded09ae54a2dab7b005420c1d1c94": "668aeae8959de229d351a8802da39749",
".git/objects/4b/45f16f5e1528e8c13b8c9b8eaba6d4e2e5c0a3": "e043a0c6d58289381d4811b186063538",
".git/objects/4b/8337a60dd3147c743b25e40f3edfeebe6eea49": "9cc19213866d9d7c441b7fe95b0f3910",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/bcca68ee4a0689e0901c30eef6198e900970cd": "5f97887947d99af219f561caca5f95f6",
".git/objects/11/6d56a768313bc8936c4f9bd6968003cf04545e": "5ad1df442ff6e304115217fb17eccc31",
".git/objects/7d/edb2218ec58c3f3c2ea4fa7aaee71d0ccf55d3": "b9faa5646ac34a6da126bc7bb1cf46bd",
".git/objects/7d/5f493be58b1329d945c8afc37a103c4a825e86": "1f01412d9a742a1d34d8405dcff69fe0",
".git/objects/29/56c71fa0a7af4d678bea0b98ca6c996dc54c85": "597df04b7d6f1ac05e168b02eddf9eb1",
".git/objects/16/8e304a39a7273bd82a49bab6245206323cf123": "85e39b621742bfa409b3c21561b415c8",
".git/objects/42/b69f7c5659bb8d604dd24993d9b40b49417469": "b8282c902f718a1e044ef3731fbab3c5",
".git/objects/89/9a085f2f932605ddd2e8e15af0d2037952b2eb": "f2346197cafa7643ddef58045309a822",
".git/objects/89/28e54eba352efe9802c9fab8124a7784b351b8": "3a639d5b7ac98e3ab0f87d5256c8ac24",
".git/objects/1f/b604a4880685d0e94b5c9c13885070fa5b2132": "754b67e8bc621816bf579da87cbeaa12",
".git/objects/73/db638bb4dc5a0a8980965bdfbce074f4756017": "43e3e7d25b8e3d011bfb8eaedfc0ed1f",
".git/objects/73/57e8744b897b3d5e2cf0a3e4274a7d09f7b4e2": "0ef481874fee6ace38c41d3792a1bec7",
".git/objects/80/6433f203f087e48bc18d40ffed3085eedb276d": "8084f8f3f3647b8be46ec342d67f2dec",
".git/objects/80/bc28f04f4767fa8ffe77e47aff42ea8bf090ad": "e5eaa5e5f2cd4ec04e1bad828dfd2308",
".git/objects/74/f7135ccbacfc0de3788fb82fa97b5211c28844": "93ffbd3c8e2ce73a0c2b997a47f93f45",
".git/objects/28/af62992a2a2e3674ac5303d1ee315d260bf010": "75a02e3baa15175712bf37f440bf6dd2",
".git/objects/28/47862fb4b3c85afffce2eb3e7e3262f8461195": "2f8e78fb2805526431ef2860631dddd4",
".git/objects/28/91753c2f599ca3aafbb71262a3cc3e9e22dd34": "8e087474bb595d9a794565caa6bd8369",
".git/objects/17/60566fce86d2906e7dd1b867fb28482fea7c26": "a41e87b96f06beddf153e8acf144d18d",
".git/objects/17/37454c3491ca270c396dded86df3db3a59e88d": "6463973609d45ab371af38ebf32e7a17",
".git/objects/8a/7063880161a21382b8024f566a0ee90056eead": "3bfde840969f6306bb2323f46c45d4a5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/94064b3e8948bc0442fcb9c9b596d05809cf25": "6e8534d10466251cf3b8b204f7af7c18",
".git/objects/7e/e80e9380d22959ffd8da705759d377fa661efc": "8e0ca1a2f3f22389d93999d2b31f7882",
".git/objects/19/83706ba8616baf4174726ec6ca531f5f65aaee": "19dbfe1c6c949d957cb4a26a6a8f8e7c",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/19/24bee0a5da7fb4a4cde0892cc34927c90ee430": "cdc02541f952d710fe77371906ac1156",
".git/objects/4c/24cbf34b8d07153dc33316f79b2346f31f0e1b": "ae253e8da2d7f1bb070197f2fa16e18f",
".git/objects/26/97bd58b3010e0251e5ff04edd9f0423be8442d": "66b4bae35ec81a7d106004c9aee8c40b",
".git/objects/21/657fe8e46a2da0f4ce37a9b8d61eda2e97ce87": "488c1ce2c1ac37a59e917f2d2b9aa061",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4d/7b1f78cc23b5f02b4090e17c7b8b831391e084": "c2379052a2f9edba43c5cf38f385d4df",
".git/objects/81/bf6af79ed7641c81eb82531fa4ea23e204d55e": "285035a14cf014650249d5887f6ba44f",
".git/objects/72/336bafecbe34550968e481663c55fc6c2a9832": "b62465db09a33bcb6d4a5ce17309d34a",
".git/objects/44/2d06782ca8cfe1153b5e6d58dff302498cc365": "53e046e5f43fe7a6dc05e65f9954f6fe",
".git/objects/88/e9a2ca74e1927114a492c197e480508863ebe3": "df09a2afc389acf67974d3c406eb3e7d",
".git/objects/88/d0bbb96db2eaece90083fb6a5e88c9d8302a76": "a63cafe58b4223ebdc08237b492a8929",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d4d0439a2d4a3d9235fc1c9ccbbb8aad2e475e": "e37874bd8e76d6b17449cd648a542070",
".git/objects/9f/54a522c568706e6ee7c113a1ede40ea6cb6a81": "a3d752c2c678bf368af6bab95f855a1a",
".git/objects/9f/460eb8af50ae386b9ee35e7b8eb42dd70d4aec": "672818d4dca97167fa8130dd26a3a711",
".git/objects/6b/ea98ac6f15a3eaa10a9842af5e92f3cf7e9256": "948e2ff52fe4d8fccdec97a010184bf2",
".git/objects/6b/8744d27bfdc2a475da2211e5a2d42a0a877400": "a97f93cae82e94497fbf1d98054bf266",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/6b/c7a8b935f29de14244bab6ced025ac8b114fee": "190c1327c86f9764f861ddf40b1b5bad",
".git/objects/07/2602a1b4427083b3b2f8b4fc4359ae55811e0d": "9c5df7d4c35eb3f926e3442cc3ccd4e3",
".git/objects/6e/c89b1f2ddd9f3e31c43ecbc8d3e516afc58480": "70f43a669656105a01a42050622298df",
".git/objects/9a/aec2f85270ec1686b259145b77d22cc4dcb821": "9f5dce2def6af87792d4afc0782c48f1",
".git/objects/9a/278ea598f8f6c35f0e750ec3315035266f52cb": "85ae6adcf243e168383cdbb8b2ae5f52",
".git/objects/9a/63e12d688f99d57ba5a108d382f650b4856487": "0f0df8fc93664abb5855685ba8b958b3",
".git/objects/5c/5295aa75f47369b58410b1157020dbf2deb6b4": "f0a9d21513346ff4b485ca93d72a2a27",
".git/objects/09/a206a5156ffdd73f76ace424d0028299d11aaf": "78af9d3860339eccf8f930b3251f703f",
".git/objects/31/ab71a13f285cb6b54667842f5b3cb982dc7e19": "aa4beae98f0da49729159936b66eaebc",
".git/objects/65/da3aef4004b73b5055b4c1699e7aa6ba352f74": "af7aee56dfec22319f92f131f3421086",
".git/objects/62/896926e7b32660a57917b9ad1a184cdfedc392": "1a962707944a37ec0a8570c8d8f93981",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/f880360a3b1e468184f9d65d8ff0c61325d18e": "a31a98a6dd35f94fafc75b5eeb956d44",
".git/objects/62/c4889964e9d373c7cca655f77f1c9a3de29610": "1868374dbe94d4b026023f1910fe0846",
".git/objects/3a/5d3e41927fb0ca1afb3a8f455eb1628e28ab28": "f53335f8a8c6aff54e69beef22f2f3e9",
".git/objects/3a/e3630643d90b2042b2a132a366f50081c29f2c": "68ccb9514e16ad2e05e085bf96e00b64",
".git/objects/98/20c60e06f9f70c7ebff0645afb9cd3d686067f": "4c00aedc0e6331bb9bc848b3dcce5347",
".git/objects/53/fabb12754140897abba9cb3c03b7ecf9225d39": "cfb93c53c8268a2912e2db3411fd922a",
".git/objects/3f/04a3799a063c1e271a529a1ae208e7e14318ac": "876cfc0e709617dfbd2b1ea62ec8acde",
".git/objects/3f/a8b87e0eb59041b153f76d1ff5f90a31bd38a5": "c1775144bc4ad725ba811925641e9596",
".git/objects/30/a256533040e6842e2a83040237ee9c6c335e53": "83478cf2f0eeec0bff4aa761180bb546",
".git/objects/30/e60ffa26c466feefb973884326d006a056dec9": "958e3cbf19433662558e71279699bb15",
".git/objects/5e/dc8c1a08d4d854d0de59e895da05ef178b5a38": "f0a38f9b2efddadaa1b49d2b3c6da1ac",
".git/objects/5b/585e2863a96e179f4f161896dd9cd5aa4ee4b3": "1fb7e8c69210487ff56f4bca9195c527",
".git/objects/5b/2b9fe56e480a8e9ae41251197ca2f3b84d3193": "c1b38508e7c3ab9c4d8d4b1c7241cd84",
".git/objects/5b/4ce6c7d62f0b9ea2ee8984cf32f4093574e7ca": "334902b463f0b348464ab77debf90f6b",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/09e280a48e85ae64888bb1fec71af97247dbab": "11cc7b8213e5529348e5ab1895308b1d",
".git/objects/08/a93b526022fe37b61311518c3f44eb31ce3139": "4d9fcc6e56510c605ca6698b51acff1c",
".git/objects/01/7b82529b621dec449cf7f3626e86be6837a302": "c277d4c9ef27f4d32dd8327d5f0ec8f4",
".git/objects/06/afa1101afb076cbf88687ba9b16b1a5f130f03": "fdc4f93e4219be2df5e419fe87f2e12f",
".git/objects/39/3c2224a39daae4586a8e1befe4e686b3facbed": "eac877cbfc517068d685d5f4fa1274bc",
".git/objects/39/baf436716d769dd5da4d0691184d3700c85c67": "8ed951fe7a690f2800086dfd5c6f03da",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/99/b0423382be061c4a4580974522560a398db2e0": "d3ab7edabf6d6f5436175838f62a3590",
".git/objects/52/ffda99cef2174a2fb7069e1a29d941a4d72836": "f9ce33ea98f3974905ed483335805f08",
".git/objects/55/1723e3fbdd3bb80876c7fac6fabad94eae41ff": "af875a34b8934a4a0e2a7d90dd79472e",
".git/objects/63/33933601af503039bbc73007eb231bcea40f18": "0131c6b1f627494498664e1a41e24e3f",
".git/objects/63/ab37383701fa26dd771533617caf16c18310ae": "c839ad6ad74ed2c6ffea95444b83f6d7",
".git/objects/0a/5c943c112b7bc84d43f7655e8a404100c7b990": "a837fa9d58740fba11b7ab86022ba559",
".git/objects/0a/207f0fce2fbb1261786c3d3de6154fb9b11a2b": "57939750fcbd8709ecd976760805d231",
".git/objects/64/dcf13216e2571ef46230ecd02bc8a3d63ea599": "124f811978fa29b26be3ef6a4644fbc1",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/90/06a77b09c41be9ea04bef44b1853092c289233": "ac37506f66ef9d5c91acd61a06090e22",
".git/objects/90/e47f5452081dc474a804299a7f316e5c0bc535": "c638e2d5da1fec362dd298b7d4ca66fc",
".git/objects/bf/751d88b06041bcea7f1157187cfc4baf7a027a": "cd3baac97775f326d1a899dca3c60a9d",
".git/objects/d3/c1569c2319945ac731516651115867b64a8b7d": "f05a86a65d2bcbac6813d3e285bd32b2",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/b8/e82b1246078e1c91419486e050d1346c445825": "a1a369565703c59b6c392919b79f073e",
".git/objects/dd/13ce60b7f52c6f35dbe655577d6094bde78723": "ceda588ae723cfc0fc507a28ea7af5e7",
".git/objects/dc/a1b79f72aa44130e3c80e543c97e91a39b9fb2": "bd624cbcb073341081c79e050861246b",
".git/objects/b6/1a752cd053a95ed38abcd5de5a150a0068d753": "8d03c31ba1d7d157099b844a4f2b0bab",
".git/objects/b6/6806828083663f13a806aec0a0fa8c1b1bd155": "29138a75d8e68634243207133c6e7da5",
".git/objects/b6/5f4b76891b63a4c639911dc657494c666d1501": "dd7ad452f7f865761de6d5f3e53edbea",
".git/objects/a9/e7271e6a48f8e6e314a0ec7156e4a42b456e02": "c6ed6d869fb651c0803fa1bac6d13efb",
".git/objects/aa/ac3dddc1bc362f5eb2aee9441c84266c28a75f": "69dde21659eaafd73d06141969413f55",
".git/objects/af/f35b965a86eb63c0c0eb9de990aabc1b1fe771": "2a8c11a29783981d6a83e9bfdfd2c4b9",
".git/objects/b7/20432766a039b45cca2b305c79adb440c82e77": "36f1170cd5473cce61fe625f1b812831",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/ca24633e52abdf44e6ea6e0bccc31697928b73": "3a1dc229833878fe0ad8a81526ceb5de",
".git/objects/b0/765228880ffdd1e5f53da93291b55392e251c5": "a8395a6a5e7ee45fa4d4ed37c9388332",
".git/objects/b0/6a8abb16fb3a075143ea84dd793b0fabee7260": "c0278e1406fd4e23d01f9e11fd9ce83d",
".git/objects/b0/46d6ad06acb1f18723d164ebfe597c7fbb85b9": "5d6b593dda60aa2d0a4217ec558f1003",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/583029eea27c368ab93198b5d3829235f741b7": "3e606ff06de2d5af84d97e48d496f7ca",
".git/objects/a1/769f0f46202f18d96b139e2e4fc46a742e6bd6": "4fc60989b2b016c545d8c0ebcec94ecf",
".git/objects/a1/83d5a1279132db49fd7ab81a2d189df911f45d": "866ba928dfe4faab2f4efb6070bb4fef",
".git/objects/ef/6d61f2f8483736d949fbcee66d5b6f173eabbc": "d33461c957cae5c35796aa53d87aa6ce",
".git/objects/ef/faa5b072d3a241c3628fa9546514aa3b29eb08": "3022dedf65f35ec49c865c062611c077",
".git/objects/c3/12ee5bb1a2b09f6ebba317551fc17b39a8ea16": "c295fecb0aa14e7903051237577e5fc9",
".git/objects/c3/eb8147996b64c73e2f1e39f2168056203e5329": "722c564b3697d9f5de9dd1fea18c11cc",
".git/objects/c4/a08927809f4866c4a4d0941d9047d1d07c0314": "14c77e7e4b54d2923d609fd35aaba5d3",
".git/objects/ea/c66fa9d68ae2ad03daa25138222b0b8dfabaf1": "d02d9625def4ba9a6a666759464e6e2a",
".git/objects/e1/cc1908db68c262a8628520bd7623032106df11": "331c4e294c977da27c6df99617c463df",
".git/objects/e1/cf393317dddf61c5b672c61cb0f5e5a8e9a195": "e5c17839146503f0c224991c17f742b2",
".git/objects/cc/d89dbda099b494516adfa38edfc960cef9fac4": "ac1a0d4e4bee36b26c3f2919e42e9aad",
".git/objects/e6/d713a93028957c2421b41257ed02841ccd8513": "9fa432cba53481d5bb2a4fec042e9ce5",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/c74c37c9efb584b93694ca993fabaf1a652f65": "eec966544380142e0661017ba31a764b",
".git/objects/f9/fc6bde1ecd077419a7e03edf04865ab0c7fbf5": "3c6a35db82ccfcded5d49093a0ad0c1d",
".git/objects/f0/4cc636e88c6c2ba087735a31a162464e1ffacc": "1e8cfdfb85b738fb35d19a9af8f79a45",
".git/objects/f0/420e35b6bf3d828b158db925cb73643707b76c": "48870f6a64e1163b60f6520345b3a3c2",
".git/objects/f0/b1a4e3476db4b95b8e6b8a903a706649222089": "3d0159f830e5f5fe8e979598971426ba",
".git/objects/f6/7771f8f2ca8db0fc2a0369e2c2a06e87e8d7d2": "c29ba46fe1089fc54a085b4dff00d3c4",
".git/objects/f6/71cb856dcd20483455b1e831473d3731a02e14": "5b93674a215aa1a2c4f0a52adda9c395",
".git/objects/f6/1abf698ee95610c24a233d9b56cf7909ffae74": "bbe63de73c8e3c23d78103a3db8ecf52",
".git/objects/e7/9e62a4d406ea8eb98379dba444fabadd65fc27": "036cf173222853cce3450ad83486b79c",
".git/objects/e7/7310101c368e5d23eab0a2dfba2f33c92f2698": "c7611f9cc0fc7631907f29065ad545bf",
".git/objects/ce/8c7e707950f935a61ab35d30e6f1e03d942aa7": "fa3ed6597965835427b32eb21efc2c75",
".git/objects/e0/ab493998a776b59505d921b8aaceec6fccf635": "27e1666d47a3eb6b8176911e446ad366",
".git/objects/e0/9cd553840327756453e2f299a0d1ddff22b6e1": "57be6581840f5e9e53090547afb6eb59",
".git/objects/e0/1b6b63c328762269d5628de34012763bf396ea": "c01c284e66b1e95b96efd2f86d5425b4",
".git/objects/e0/4e43840e38045d4b358fc234afc5bb7fe6ca00": "db578f690ec3149c20b3ab3078322731",
".git/objects/2c/d621ff3d84ae8b798830d4e184d1d3438ce787": "448538388f8fa80dd3f977ade91489f1",
".git/objects/2d/be8f239557f4b88754ac676947cf703dc76b48": "3bc48dcd7c4a79ab5055536c4ee09d24",
".git/objects/83/06e9ce4b62f1fa2846caf627574490daf9aa32": "8f29de784e56dc4495c303ea71923ca7",
".git/objects/1b/5ccf6b76a80408fe07b9f633b887695430c480": "02624d0d69cc3523ffbbc02caee40c31",
".git/objects/1b/0ee79e7679373377421e1543f238a203507620": "567bcdd8014a861240c45e55d78d9052",
".git/objects/1b/11ffadf162f31034f4b10626b0969a2a973f57": "5d169b0fa8b5dd88581dba3501a698ec",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/48/cb33a68fa26f7ac34d1d3260c1ddc2d6704d20": "0827bfdb7d4359515fdfe86b1e5afeae",
".git/objects/48/218bdfaa894fbeeee8740a4d8f6d44aa1e5c16": "ae90f8379ac8ba22175f03416d291c47",
".git/objects/70/d31506df3c11978fd7a2425b8c4b425ebd8100": "415ebb63d31aa02adbbdd0ab958e6d60",
".git/objects/70/7f82ff77dcd3fc9231122157f23a52c3979ef2": "de85325c6cd029741bd2a271d647cc15",
".git/objects/1e/efbcafa4efa10eee17b315370d498e0e2f1e6c": "335a4d4b47545dae6f3aef0055e7a5c3",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/84/35fa2dcc56aa05f16294740bc710bbb97e6280": "b50b02fbd1c271f0576fdb812be10858",
".git/objects/23/66370f5b715f988d32015c4ce8816958c7c30f": "013ef3dfe9812550945a35ed240f42be",
".git/objects/23/86f777adf57642a6055623cac4f929c544a303": "fafcd02b7dbd8cd2ce9da601d6534391",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/016d44e08a366b2a337b4ca38359a2ca24b6e6": "d48752b927c0e9e1a720171043a5e59d",
".git/objects/4f/13094ec604b6d07a94603be546d8dea30d3bbd": "d0fa632b9ce733d0a38f517ac553560b",
".git/objects/8d/f94f88160ff0a6071f0cc9c03b3a60b5fd18da": "60e06d4cfd3535d2ce5cf4b904f03d86",
".git/objects/8d/ede0a8a1cdb45c14661a8dad7dddf1f228fabc": "e7da6a8d924289122155109f2b4a7407",
".git/objects/15/e89ed1bcc74f8f55060d7daf3882a7b9883a56": "c582425574cfa1232febb105b921d69d",
".git/objects/15/28178c0d3cb4593ddc103f57f7429aa63256cb": "e606b154d051d2729f384909ff3abd02",
".git/objects/8c/21656bec3c8033b9ac359caf6cf86da2842419": "e07a0aad090e325889f53e179c08f969",
".git/objects/8c/386b943b201284d7e3438ef076ed9b41ea2956": "f5dc4c9e55b44045272c258d3f2de59c",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1c/5dd801d5f1234005b48207b7e6a53b55b59c87": "3aca378ca805eff395e65dd2d37ce964",
".git/objects/49/411e893fcae9a641e15142ca44f601b92cab0f": "30bdd8a2fb58b9bcaeab082f47adb5f3",
".git/objects/40/b67f176da6387c55fde21aa511970658f8113f": "f0f0181841be8ed6eb2cbb322cf9989a",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2e/ea66ad94d783254f4e4a09522c1c074aa9d210": "c4bdad215f8ecb0267a2af7fd38c9b74",
".git/objects/2b/9e35d7fb356e12b44f3f75b78284fa73eb94b3": "60b5015017fc9c22430595ba20375370",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/47/4f452ba8c80ed12e9fd87086cce94dfadb627d": "c8762e598f9190a178ddae21241491d1",
".git/objects/47/b000913e6987fcd2a1a1a19219ff3feea640c7": "c66413444636180222b1bd72f4952895",
".git/objects/78/67400072327fb5dc97e957a72c3b1ff6b1c624": "421984a7430ef14bc858b6c9f1e51e25",
".git/objects/8b/2150439eb1ab55432418c8acd5cfc85a9f05ff": "933bbde31aa85c82b53158076287f418",
".git/objects/13/8e62ce2057910fde1bbb35cac51cae36f7476c": "21cb3c404aa23c664a02b0988a0c7d26",
".git/objects/13/3092f6133383e7cc39287070517ae51a022e77": "c00989b63c8f46eb9d7c16227caffcfe",
".git/objects/14/aabb3c7c589adeeb0d8d668b1449f920457e36": "40b89bddb1392dac955b47c7108e9af4",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/22/7c7fdb3209f45359be59eb04ef9e9cd9707a4b": "ba22846e98b570f38988eaf9c0958bf3",
".git/objects/22/0b4ef4b1e641028988158d8790d9041b7165bb": "8cbc7eb0fc5dc20c243eeda53c62b49c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c176a293c62d1a4cd3389397d2c49b84",
".git/logs/refs/heads/master": "93e24b2c1316229fc93f94f36de1e0b6",
".git/logs/refs/remotes/origin/master": "97c2e638d0d394441fe0f2bc6f27fd70",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "997e71d327ae6fff900cf84c214f1a60",
".git/refs/remotes/origin/master": "997e71d327ae6fff900cf84c214f1a60",
".git/index": "c219cbed03b5af943332a2c7e5188bd6",
".git/COMMIT_EDITMSG": "d21dd791cba672e2dcd8201ebff7a7ed",
"assets/AssetManifest.json": "0dbadc674810d0ef73b0ac1d30c9f815",
"assets/NOTICES": "194a5b1de22280c94284960f6a4681a7",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "c2029364a50f01ba4718d45e655a1a4f",
"assets/fonts/MaterialIcons-Regular.otf": "91848b387c74f9c93c81d574224ddff0",
"assets/assets/applePayLogo.png": "b75460a6b6e7999e80b346416e528fb6",
"assets/assets/ghostwriter-logo.png": "0a55f76097431d2933d7f378a5705183",
"assets/assets/motion-text-logo-white.png": "b21d9ce5379fbb1ded7d00765af25f19",
"assets/assets/blank-image-asset@3x.png": "aa29bdb10fac8c2bf663d120f9e07b9b",
"assets/assets/googlePayLogo.png": "54f42984faac170a0a89039c7c08b9b3",
"assets/assets/blank-image-asset@2x.png": "f59d2e7ceb3c5ebc3a7e4740d6ab3422",
"assets/assets/ghostwriter-logo@2x.png": "503c9367457dec19fe4c36a1dba746f8",
"assets/assets/blank-image-asset.png": "2ecdb58979fde5f4afecc24fc6d1c258",
"assets/assets/spaceboat-logo.png": "a989bc686f8b2fd67f435fd7e8b17814",
"assets/assets/ghostwriter-logo@3x.png": "8d2468dca4080953655e9df7e573a6ae",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
