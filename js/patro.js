var $ = jQuery;

(function ($) {

    $.fn.NepaliPatro = function (attributes) {


        $.each($(this), function () {
            //$.eac($(this),function(){

            var $selector = $(this);


            var Lang;

            function getCookie(cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1);
                    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
                }
                return "";
            }

            document.cookie = "PatroLangCookie=np";
            Lang = getCookie("PatroLangCookie");


            Lang == '' ? Lang = "np" : Lang;


            if (Lang == "en") {
                var PatroLang = {
                    Prev: "Prev",
                    CurrentMonth: "January",
                    Next: "Next",
                    FirstDay: "Sun",
                    SecondDay: "Mon",
                    ThirdDay: "Tue",
                    FourthDay: "Wed",
                    FifthDay: "Thu",
                    SixthDay: "Fri",
                    SeventhDay: "Sat",
                    One: "1",
                    Two: "2",
                    Three: "3",
                    Four: "4",
                    Five: "5",
                    Six: "6",
                    Seven: "7",
                    Eight: "8",
                    Nine: "9",
                    Zero: "0",
                    CurrentYear: '2015'

                }
            } else if (Lang == "np") {

                var PatroLang = {
                    //Prev: "अघि",
                    Prev: " ",
                    CurrentMonth: "वैशाख",
                    Next: " ",
                    //Next: "पछि",
                    FirstDay: "आईत",
                    SecondDay: "सोम",
                    ThirdDay: "मंगल",
                    FourthDay: "बुध",
                    FifthDay: "बिही",
                    SixthDay: "शुक्र",
                    SeventhDay: "शनी",
                    One: "१",
                    Two: "२",
                    Three: "३",
                    Four: "४",
                    Five: "५",
                    Six: "६",
                    Seven: "७",
                    Eight: "८",
                    Nine: "९",
                    Zero: "०",
                    CurrentYear: "२०७२"

                }
            }

            var BaseDigit = new Array("Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine");

            var NPDigit = {

                One: "१",
                Two: "२",
                Three: "३",
                Four: "४",
                Five: "५",
                Six: "६",
                Seven: "७",
                Eight: "८",
                Nine: "९",
                Zero: "०"

            }

            var ENDigit = {

                One: "1",
                Two: "2",
                Three: "3",
                Four: "4",
                Five: "5",
                Six: "6",
                Seven: "7",
                Eight: "8",
                Nine: "9",
                Zero: "0"

            }

            var NPWeekDay = new Array("आईत", "सोम", "मंगल", "बुध", "बिही", "शुक्र", "शनी");

            var NPMonth = new Array("बैशाख", "जेठ", "अषाढ", "श्रावण", "भाद्र", "आश्विन", "कार्तिक", "मङ्सिर", "पौष", "माघ", "फाल्गुन", "चैत्र");

            var ENMonth = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
            var GlobalObj;


            var RefDate = {

                BS: '2000/01/01',
                AD: '1943/04/14'


            }

            var BS = {};
            BS[2000] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
            BS[2001] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2002] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
            BS[2003] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
            BS[2004] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
            BS[2005] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2006] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
            BS[2007] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
            BS[2008] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31);
            BS[2009] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2010] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
            BS[2011] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
            BS[2012] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30);
            BS[2013] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2014] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
            BS[2015] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
            BS[2016] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30);
            BS[2017] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2018] = new Array(31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30);
            BS[2019] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
            BS[2020] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2021] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2022] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30);
            BS[2023] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
            BS[2024] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2025] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2026] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
            BS[2027] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
            BS[2028] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2029] = new Array(31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30);
            BS[2030] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
            BS[2031] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
            BS[2032] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2033] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
            BS[2034] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
            BS[2035] = new Array(30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31);
            BS[2036] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2037] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
            BS[2038] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
            BS[2039] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30);
            BS[2040] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2041] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
            BS[2042] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
            BS[2043] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30);
            BS[2044] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2045] = new Array(31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30);
            BS[2046] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
            BS[2047] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2048] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2049] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30);
            BS[2050] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
            BS[2051] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2052] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2053] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30);
            BS[2054] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
            BS[2055] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2056] = new Array(31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30);
            BS[2057] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
            BS[2058] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
            BS[2059] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2060] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
            BS[2061] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
            BS[2062] = new Array(30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31);
            BS[2063] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2064] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
            BS[2065] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
            BS[2066] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31);
            BS[2067] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2068] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
            BS[2069] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
            BS[2070] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30);
            BS[2071] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2072] = new Array(31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30);
            BS[2073] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
            BS[2074] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2075] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2076] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30);
            BS[2077] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
            BS[2078] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2079] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
            BS[2080] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30);
            BS[2081] = new Array(31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30);
            BS[2082] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30);
            BS[2083] = new Array(31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30);
            BS[2084] = new Array(31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30);
            BS[2085] = new Array(31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30);
            BS[2086] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30);
            BS[2087] = new Array(31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30);
            BS[2088] = new Array(30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30);
            BS[2089] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30);
            BS[2090] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30);


            var self = {

                GlobalDate: '',

                init: function () {


                    var CurrentDateObject = new Date();

                    if (Lang == "en") {

                        self.GlobalDate = CurrentDateObject.getFullYear() + '/' + (CurrentDateObject.getMonth() + 1) + '/' + CurrentDateObject.getDate();

                    } else if (Lang == "np") {

                        var NepDate = self.AdToBsDate(CurrentDateObject.getFullYear() + '/' + (CurrentDateObject.getMonth() + 1) + '/' + CurrentDateObject.getDate());

                        self.GlobalDate = NepDate.substr(0, NepDate.lastIndexOf("/"));

                    }


                    this.populateDate();

                    this.CreateCalenderElement();

                    this.bindCalenderEvents();

                    this.getDate();


                },
                bindCalenderEvents: function () {


                    $selector.on('click', '.PatroCenter.CurrentDateAndMonth', function () {

                        var $obj = $(this);
                        if ($obj.find('select').length > 0) {

                            return;
                        }


                        var yearSelectionTab = $('<select class="yearSelectionDropDown">');

                        $.each(BS, function (key, val) {

                            yearSelectionTab.append('<option data-year="' + key + '">' + self.NumberToLanguageDigit(key) + '</option>');

                        });

                        var monthSelectionTab = $('<select class="monthSelectionDropDown">');

                        for (var i = 0; i < 12; i++) {

                            monthSelectionTab.append('<option data-month="' + (i + 1) + '">' + NPMonth[i] + '</option>');

                        }

                        $obj.html(yearSelectionTab);

                        $obj.append(monthSelectionTab);

                        var $currentDate = $obj.attr('data-date');

                        var currentDateArray = $currentDate.split('/');

                        $obj.find(".yearSelectionDropDown").find('option[data-year="' + currentDateArray[0] + '"]').prop("selected", true);

                        $obj.find(".monthSelectionDropDown").find('option[data-month="' + currentDateArray[1] + '"]').prop("selected", true);

                        var $currentDateObj = $selector.find(".PatroCenter.CurrentDateAndMonth");

                        var yearDropDownValue = $currentDateObj.find(".yearSelectionDropDown").find("option:selected").attr("data-year");

                        var monthDropDownValue = $currentDateObj.find(".monthSelectionDropDown").find("option:selected").attr("data-month");

                        $currentDateObj.find(".yearSelectionDropDown").on("change", function () {

                            yearDropDownValue = $(this).find("option:selected").attr("data-year");

                            self.JumpToDate(yearDropDownValue + "/" + monthDropDownValue + "/1");
                        });
                        $currentDateObj.find(".monthSelectionDropDown").on("change", function () {

                            monthDropDownValue = $(this).find("option:selected").attr("data-month");

                            self.JumpToDate(yearDropDownValue + "/" + monthDropDownValue + "/1");
                        });
                    });


                },


                JumpToDate: function (currDate) {

                    var dateSplit = currDate.split("/");

                    var month = dateSplit[1] - 1;

                    if (month == 0) {
                        dateSplit[1] = 12;
                        dateSplit[0] = dateSplit[0] - 1;
                    } else {

                        dateSplit[1] = dateSplit[1] - 1;
                    }
                    $selector.find('.CurrentDateAndMonth').attr('data-date', dateSplit[0] + "/" + dateSplit[1] + "/" + dateSplit[2]);

                    $selector.find("th.Next").trigger("click");
                },
                CreateCalenderElement: function () {


                    var Element = '<div class="NepaliPatroElement noselect">';

                    Element += '<table id="NepaliPatro" developer-url="http://umeshghimire.com.np">';

                    Element += '<thead><tr style="background:#F39A9A"><th class="noselect Prev">' + PatroLang.Prev + '</th><th data-date="' + self.GlobalDate + '" colspan="5" class="PatroCenter CurrentDateAndMonth noselect">' + PatroLang.CurrentYear + ' ' + PatroLang.CurrentMonth + '</th><th class="noselect Next">' + PatroLang.Next + '</th> </tr>';

                    Element += '<tr style="background:#F39A9A" ><th>' + PatroLang.FirstDay + '</th><th>' + PatroLang.SecondDay + '</th><th>' + PatroLang.ThirdDay + '</th><th>' + PatroLang.FourthDay + '</th><th>' +

                        PatroLang.FifthDay + '</th><th>' + PatroLang.SixthDay + '</th><th>' + PatroLang.SeventhDay + '</th></tr></thead>';

                    Element += '<tbody>';

                    Element += '</tbody>';

                    Element += '</table>';

                    $selector.append(Element);

                    return Element;


                },
                getDate: function () {

                    var FullDate = self.GlobalDate.split('/');

                    PatroLang.CurrentYear = this.NumberToLanguageDigit(FullDate[0]);


                    PatroLang.CurrentMonth = eval(Lang.toUpperCase() + 'Month' + "[" + (parseInt(FullDate[1]) - 1) + "]");


                    this.populateMonth(self.GlobalDate, Lang);


                },
                populateDate: function () {


                    var FullDate = self.GlobalDate.split('/');


                    PatroLang.CurrentYear = this.NumberToLanguageDigit(FullDate[0]);


                    PatroLang.CurrentMonth = eval(Lang.toUpperCase() + 'Month' + "[" + (parseInt(FullDate[1]) - 1) + "]");


                },
                populateMonth: function ($date, Language) {

                    //CurrentDateAndMonth


                    if (Language == "en") {

                        var PatroDate = new Date($date);

                        PatroWeekDay = (PatroDate.getDay() + 1);

                        PatroYear = PatroDate.getFullYear();

                        PatroMonth = PatroDate.getMonth() + 1;

                        PatroDay = PatroDate.getDate();

                        NumberOfDays = new Date(PatroYear, (PatroMonth + 1), 0).getDate();


                    } else if (Language == "np") {


                        NepaliDate = $date.split('/');//this.AdToBsDate(PatroDate.getFullYear() + '/' + (PatroDate.getMonth() + 1) + '/' + PatroDate.getDate()).split('/');


                        PatroYear = NepaliDate[0];

                        PatroMonth = (NepaliDate[1]) - 1;

                        PatroDay = NepaliDate[2];

                        NumberOfDays = BS[PatroYear][PatroMonth];

                        var ADDate = self.BsToAD($date);

                        PatroWeekDay = self.BsToAD($date);

                        PatroWeekDay = (PatroWeekDay[(PatroWeekDay.length - 1)]);


                    }


                    WeekStartDay = NumberOfDays;


                    var Divider = (Math.floor((PatroDay / 7)));

                    var Reminder = PatroDay - (Divider * 7); // Same week day on this day


                    if (Reminder == 1) {


                        var FirstDayWeekDay = PatroWeekDay;

                    } else {

                        Reminder = Reminder == 0 ? 7 : Reminder;


                        var wkDay = PatroWeekDay;

                        for (p = Reminder; p <= Reminder; p--) {


                            if (wkDay == 0) {
                                wkDay = 7;
                            }

                            if (p == 0) {

                                FirstDayWeekDay = wkDay + 1;

                                break;

                            }

                            wkDay--;
                        }

                    }


                    if (GlobalObj) {


                        $patroBody = $(GlobalObj).closest('table').find('tbody')


                    } else {

                        //alert('no-alert');


                        $patroBody = $selector.find('#NepaliPatro tbody');
                        //$patroBody = $('body').find(selector + ' #NepaliPatro tbody');

                    }
                    $patroBodyHTML = '';

                    var days = 0;

                    var i = 0;

                    for (i = 0; i < 6; i++) {

                        $patroBodyHTML += '<tr>';

                        for (j = 0; j < 7; j++) {

                            var TdClass = '';

                            if (PatroDay == (days + 1)) {


                                var currentDateArray = this.CurrentBsDate().split('/');

                                var selectedDateArray = $selector.find('table#NepaliPatro thead tr:first-child th:nth-child(2)').attr('data-date').split('/');


                                if (currentDateArray[0] == selectedDateArray[0] && currentDateArray[1] == selectedDateArray[1] && currentDateArray[2] == selectedDateArray[2]) {


                                    TdClass += 'today';
                                }


                            }

                            if (j == 6) {

                                TdClass += ' week_holiday';

                            }


                            $patroBodyHTML += '<td class="' + TdClass + '">';


                            if (days < NumberOfDays) {

                                if (i == 0 && (FirstDayWeekDay - 1) <= j) {
                                    days++;
                                    $patroBodyHTML += this.NumberToLanguageDigit(days);
                                }
                                if (i > 0) {
                                    days++;

                                    $patroBodyHTML += this.NumberToLanguageDigit(days);
                                }
                            }


                            $patroBodyHTML += '</td>';
                        }
                        $patroBodyHTML += '</tr>';


                    }

                    $patroBody.html('');
                    $patroBody.append($patroBodyHTML);


                    CurrentDate = PatroYear + '/' + (parseInt(PatroMonth) + 1) + '/' + PatroDay;


                    if (GlobalObj) {


                        $(GlobalObj).closest('#NepaliPatro').find('.CurrentDateAndMonth').html(PatroLang.CurrentYear + ' ' + PatroLang.CurrentMonth);


                    }

                },


                NumberToLanguageDigit: function (RawNumber) {


                    RawNumber = String(RawNumber);

                    if (Lang == "en") {

                        return RawNumber;
                    }
                    var OutputNumber = '';

                    for (i = 0; i < RawNumber.length; i++) {

                        OutputNumber += eval(Lang.toUpperCase() + 'Digit' + "." + BaseDigit[RawNumber[i]] + "")

                    }


                    return OutputNumber;


                },

                CurrentBsDate: function (FullDate) {


                    var PatroDate = (FullDate == null) ? new Date() : FullDate;

                    if (Lang == "np") {


                        if (FullDate != null) {


                            var CurrentDate = this.BsToAD(FullDate);

                            CurrentDate.split('/');

                            return FullDate;


                        }

                        return this.AdToBsDate(PatroDate.getFullYear() + '/' + (PatroDate.getMonth() + 1 ) + '/' + PatroDate.getDate());

                    } else if (Lang == "en") {

                        return (PatroDate.getFullYear() + '/' + (PatroDate.getMonth() ) + '/' + PatroDate.getDate() + (PatroDate.getDay() + 1));
                    }


                },

                getFirstDayOfMonth: function () {

                    if (Lang == "np") {


                    }


                },

                AdToBsDate: function (AD) {

                    var ADDate = new Date(AD);

                    var Day = (ADDate.getDay() + 1);
                    console.log('ad is ' + AD);

                    var NumOfDays = (new Date(AD) - new Date(RefDate.AD)) / (24 * 60 * 60 * 1000);


                    var AdditionalDay = 0;

                    var NepDate = '';
                    $.each(BS, function (index, value) {

                        $.each(value, function (monthIndex, monthValue) {

                            AdditionalDay += monthValue;

                            if (NumOfDays < AdditionalDay) {


                                NepDate = index + '/' + (monthIndex + 1) + '/' + (monthValue - (AdditionalDay - NumOfDays) + 1) + '/' + Day;


                                return false;


                            }
                        });

                        if (NepDate != '') {

                            return false;
                        }


                    });


                    return (NepDate);

                },

                BsToAD: function (BSDate) {

                    var FullBSDate = BSDate.split('/');
                    FullBSDate[1] = parseInt(FullBSDate[1]) - 1;
                    FullBSDate[2] = parseInt(FullBSDate[2]) - 1;

                    var TotalDays = 0;
                    var LoopBreak = 0;

                    $.each(BS, function (Index, Value) {


                        if (parseInt(FullBSDate[0]) >= parseInt(Index)) {

                            $.each(Value, function (MonthIndex, MonthValue) {

                                if (parseInt(Index) == parseInt(FullBSDate[0]) && parseInt(MonthIndex) == parseInt(FullBSDate[1])) {


                                    if (parseInt([FullBSDate[2]]) <= MonthValue) {

                                        TotalDays += parseInt(FullBSDate[2]);

                                    } else {

                                        TotalDays += parseInt(MonthValue);
                                    }
                                    LoopBreak = 1;
                                    return false;

                                }
                                TotalDays += parseInt(MonthValue);

                            });
                            if (LoopBreak == 1) {

                                return false;
                            }
                        }
                    });


                    var ConvertedDate = new Date(RefDate.AD);


                    ConvertedDate.setDate(ConvertedDate.getDate() + TotalDays);


                    return (ConvertedDate.getFullYear() + '/' + (ConvertedDate.getMonth() + 1) + '/' + ConvertedDate.getDate() + '/' + (ConvertedDate.getDay() + 1));


                },
                CurrentWeekDay: function () {

                    var PatroDate = new Date();

                    return (PatroDate.getDay());

                },

                NepaliDate: function () {

                    var currentDate = this.CurrentBsDate();
                    var currentWeekDay = this.CurrentWeekDay();


                }


            }


            self.init();


            // $('body').on('click', selector + ' #NepaliPatro .Prev', function () {
            $selector.on('click', '#NepaliPatro .Prev', function () {



                //$('body').on('click', selector + ' #NepaliPatro .Prev', function () {


                var currDate = $(this).parent('tr').find('.CurrentDateAndMonth').attr('data-date'); //.split('/');

                var $Date = currDate.split('/');


                var Month, Year;

                if (parseInt($Date[1]) == 1) {

                    Month = 12;
                    Year = parseInt($Date[0]) - 1;


                } else {
                    Year = parseInt($Date[0]);

                    Month = (parseInt($Date[1]) - 1);
                }


                self.GlobalDate = Year + '/' + Month + '/' + $Date[2];


                $(this).parent('tr').find('.CurrentDateAndMonth').attr('data-date', self.GlobalDate);


                var FullDate = self.GlobalDate.split('/');

                PatroLang.CurrentYear = self.NumberToLanguageDigit(FullDate[0]);


                PatroLang.CurrentMonth = eval(Lang.toUpperCase() + 'Month' + "[" + (parseInt(FullDate[1]) - 1) + "]");


                GlobalObj = this;


                self.getDate();

                $.each($(this).closest('.NepaliPatroElement'), function () {

                    if ($(this).find('table tbody tr:first-child td:last-child').html() == '') {

                        $(this).find('table tbody tr:first-child').remove();
                    }


                    if ($(this).find('table tbody tr:last-child td:first-child').html() == '') {

                        $(this).find('table tbody tr:last-child').remove();
                    }


                });


            });

            //$('body').on('click', selector + ' #NepaliPatro .Next', function () {
            $selector.on('click', '#NepaliPatro .Next', function () {

                var currDate = $(this).parent('tr').find('.CurrentDateAndMonth').attr('data-date'); //.split('/');


                var $Date = currDate.split('/');

                var Month, Year;

                if (parseInt($Date[1]) == 12) {

                    Month = 1;
                    Year = parseInt($Date[0]) + 1;


                } else {
                    Year = parseInt($Date[0]);

                    Month = (parseInt($Date[1]) + 1);
                }


                self.GlobalDate = Year + '/' + Month + '/' + $Date[2];

                $(this).parent('tr').find('.CurrentDateAndMonth').attr('data-date', self.GlobalDate);


                var FullDate = self.GlobalDate.split('/');

                PatroLang.CurrentYear = self.NumberToLanguageDigit(FullDate[0]);


                PatroLang.CurrentMonth = eval(Lang.toUpperCase() + 'Month' + "[" + (parseInt(FullDate[1]) - 1) + "]");


                //  self.populateMonth(self.GlobalDate, Lang, this);
                GlobalObj = this;

                self.getDate();

                $.each($(this).closest('.NepaliPatroElement'), function () {

                    if ($(this).find('table tbody tr:first-child td:last-child').html() == '') {

                        $(this).find('table tbody tr:first-child').remove();
                    }


                    if ($(this).find('table tbody tr:last-child td:first-child').html() == '') {

                        $(this).find('table tbody tr:last-child').remove();
                    }


                });


            });


            $.each($('.NepaliPatroElement'), function () {

                if ($(this).find('table tbody tr:first-child td:last-child').html() == '') {

                    $(this).find('table tbody tr:first-child').remove();
                }


                if ($(this).find('table tbody tr:last-child td:first-child').html() == '') {

                    $(this).find('table tbody tr:last-child').remove();
                }


            });


            function ShowPopHoverDate($obj) {

                $($obj).find(".popoverDate").remove();

                var currDate = $($obj).closest('table').find('.CurrentDateAndMonth ').attr('data-date').split('/');

                $($obj).append('<div class="popoverDate"><span>' + self.NumberToLanguageDigit(currDate[0]) + '/' + self.NumberToLanguageDigit(currDate[1]) + '/' + $($obj).html() + '</span></div>');

            }

            function RemovePophover($obj) {

                $($obj).find(".popoverDate").remove();

            }


            $('body').on('mouseover', '.NepaliPatroElement table tbody td:not(.NepaliPatroElement table tbody td:empty)', function (event) {


                if (event.target.tagName == "TD") {

                    ShowPopHoverDate(this);
                }
            });


            $('body').on('mouseleave', '.NepaliPatroElement table tbody td:not(.NepaliPatroElement table tbody td:empty)', function (event) {
                //if (event.target.tagName == "TD" || event.target.tagName == "SPAN") {

                RemovePophover(this);
                //}


            });


        });
    }


}(jQuery));


$(function () {

    jQuery('.NepaliPatro').NepaliPatro({});

});




