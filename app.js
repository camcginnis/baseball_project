var MLBStats = [
    {
        name: "David Ortiz",
        nickname: "Big Papi",
        avg: "Avg: .266",
        hRuns: "Homeruns: 36",
        rbis: "RBIs: 101",
    },
//    {
//        name: "Andrew McCutchen",
//        nickname: "Cutch",
//        avg: .298,
//        hRuns: 22,
//        rbis: 95,
//        sbs: 10,
//    },
//    {
//        name: "Clayton Kershaw",
//        record: 15-7,
//        era: 2.25,
//        whip: 0.91,
//        ks: 281,
//    },
//    {
//        name: "Craig Kimbrel",
//        era: 2.67,
//        whip: 1.06,
//        ks: 83,
//        saves: 37, 
//    },
];

$(document).ready(function(){
    var $player = $("#playerName");
    var $button = $("#stats");
    var $outputDiv = $("#output");
    
    var generate = function(playerName, stats){
        var $outputstats = $("<div class='row'></div>");
        
    
  

    $outputstats.append("<h3>" +playerName+ "</h3>");
    $outputstats.append("<p>" +stats.nickname+ "</p>");
    $outputstats.append("<p>" +stats.avg+ "</p>");
    $outputstats.append("<p>" +stats.rbis+ "</p>");
    $outputstats.append("<p>" +stats.hRuns+ "</p>");
//    $outputstats.append("<p>" +stats.record+ "</p>");
//    $outputstats.append("<p>" +stats.era+ "</p>");
//    $outputstats.append("<p>" +stats.whip+ "</p>");
//    $outputstats.append("<p>" +stats.ks+ "</p>");
//    $outputstats.append("<p>" +stats.saves+ "</p>");
//    $outputstats.append("<p>" +stats.sbs+ "</p>");
//    

    return $outputstats;

};

 $button.click(function(){
        var info = generate($player.val(), MLBStats[0]);
        info.css("display", "none");
        $outputDiv.append(info);
        info.fadeIn("slow");
        $player.val("");
    });

});