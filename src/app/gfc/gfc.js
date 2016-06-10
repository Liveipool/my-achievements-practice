window.gfc = {schemas: {"医生":{"title":"病患基本信息","description":"MDT系统中使用的病患信息","type":"object","properties":{"档案号":{"type":"string","minLength":2},"姓名":{"type":"string","minLength":2},"性别":{"enum":["男","女"]},"联系电话":{"type":"string","minLength":2},"年龄":{"type":"integer","minimum":0,"maximum":123},"出生日期":{"type":"string","format":"date-time"},"身份证号":{"type":"string","minLength":2},"出生地":{"type":"string","minLength":2},"民族":{"enum":["汉族","蒙古族","回族","藏族","维吾尔族","苗族","彝族","壮族","布依族","朝鲜族","满族","侗族","瑶族","白族","土家族","哈尼族","哈萨克族","傣族","黎族","傈僳族","佤族","畲族","拉祜族","水族","东乡族","纳西族","景颇族","柯尔克孜族","土族","达斡尔族","仫佬族","羌族","布朗族","撒拉族","毛南族","仡佬族","锡伯族","阿昌族","普米族","塔吉克族","怒族","乌兹别克族","俄罗斯族","鄂温克族","德昂族","保安族","裕固族","京族","塔塔尔族","独龙族","鄂伦春族","赫哲族","门巴族","珞巴族","基诺族","高山族"]},"住院号":{"type":"string","minLength":2},"影像号":{"type":"string","minLength":2},"婚姻状况":{"enum":["未婚","已婚","离异"]},"身高":{"type":"integer","minimum":0,"maximum":280},"体重":{"type":"integer","minimum":0,"maximum":640},"血型":{"enum":["A","B","O","AB"]},"联系地址":{"type":"string","minLength":2}},"required":["姓名","性别","年龄","身份证号"]},"病患":{"title":"病患基本信息","description":"MDT系统中使用的病患信息","type":"object","properties":{"档案号":{"type":"string","minLength":2},"姓名":{"type":"string","minLength":2},"性别":{"enum":["男","女"]},"联系电话":{"type":"string","minLength":2},"年龄":{"type":"integer","minimum":0,"maximum":123},"出生日期":{"type":"string","format":"date-time"},"身份证号":{"type":"string","minLength":2},"出生地":{"type":"string","minLength":2},"民族":{"enum":["汉族","蒙古族","回族","藏族","维吾尔族","苗族","彝族","壮族","布依族","朝鲜族","满族","侗族","瑶族","白族","土家族","哈尼族","哈萨克族","傣族","黎族","傈僳族","佤族","畲族","拉祜族","水族","东乡族","纳西族","景颇族","柯尔克孜族","土族","达斡尔族","仫佬族","羌族","布朗族","撒拉族","毛南族","仡佬族","锡伯族","阿昌族","普米族","塔吉克族","怒族","乌兹别克族","俄罗斯族","鄂温克族","德昂族","保安族","裕固族","京族","塔塔尔族","独龙族","鄂伦春族","赫哲族","门巴族","珞巴族","基诺族","高山族"]},"住院号":{"type":"string","minLength":2},"影像号":{"type":"string","minLength":2},"婚姻状况":{"enum":["未婚","已婚","离异"]},"身高":{"type":"integer","minimum":0,"maximum":280},"体重":{"type":"integer","minimum":0,"maximum":640},"血型":{"enum":["A","B","O","AB"]},"联系地址":{"type":"string","minLength":2}},"required":["姓名","性别","年龄","身份证号"]}}}