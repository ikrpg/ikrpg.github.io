// global
// var ikrpg

var ikrpg = ikrpg || {};

(function () {
    
    var tables = $("table[data-category][data-subcategory]");
    
    tables.each(function (i, elem) {
        var category = $(elem).attr("data-category");
        var subcategory = $(elem).attr("data-subcategory");
        
        var selector = 'table[data-category="'+category+'"][data-subcategory="'+subcategory+'"]';
        var table = $(selector).dataTable({
            "data": ikrpg.index.data.filter(ikrpg.index.filter.categories(category, subcategory)),
            "columns": [
                { "data": "name" },
                { "data": "publication" },
                { "data": "page" },
                { "data": "game" }
            ],
            "paging": false,
            "info": false,
            "fnRowCallback": function(row, data, index) {
              var url = data.publication.replace(/[#]/g, "").replace(/[\/\s]+/g, "-");
              var g_url = data.game.replace(/[\s]+/g, "-");
              
              $('td:eq(1)', row).html('<a href="/index/publication/'+url+'/">'+data.publication+'</a>');
              $('td:eq(3)', row).html('<a href="/index/game/'+g_url+'">'+data.game+'</a>');
              return row;
            }
        });

        new $.fn.dataTable.FixedHeader(table);

        function filterColumn(i, table) {
            var elem = $(table);
            var category = elem.attr("data-category");
            var subcategory = elem.attr("data-subcategory");
            
            var real_table = $('section.content table[data-category="'+category+'"][data-subcategory="'+subcategory+'"]');
            var query = $('.FixedHeader_Cloned table[data-category="'+category+'"][data-subcategory="'+subcategory+'"] .col'+i+'_filter')
            real_table.DataTable().column(i).search(query.val(), true, true).draw();
        }

        $('input.column_filter').on('keyup click', function () {
            filterColumn($(this).attr('data-column'), $(this).closest('table'));
        });
    })
})();

(function () {
    
    var tables = $("table[data-publication]");
    
    tables.each(function (i, elem) {
        var publication = $(elem).attr("data-publication");
        
        var selector = 'table[data-publication="'+publication+'"]';
        var table = $(selector).dataTable({
            "data": ikrpg.index.data.filter(ikrpg.index.filter.publication(publication)),
            "columns": [
                { "data": "name" },
                { "data": "page" },
                { "data": "category" },
                { "data": "subcategory" },
                { "data": "game" }
            ],
            "paging": false,
            "info": false,
            "fnRowCallback": function(row, data, index) {
              var c_url = data.category.replace(/[\s]+/g, "-");
              var sc_url = data.subcategory.replace(/[#]/g, "").replace(/[\/\s]+/g, "-");
              var g_url = data.game.replace(/[\s]+/g, "-");
              
              $('td:eq(2)', row).html('<a href="/index/category/'+c_url+'/">'+data.category+'</a>');
              $('td:eq(3)', row).html('<a href="/index/category/'+c_url+'/#'+sc_url+'">'+data.subcategory+'</a>');
              $('td:eq(4)', row).html('<a href="/index/game/'+g_url+'">'+data.game+'</a>');
              return row;
            }
        });

        new $.fn.dataTable.FixedHeader(table);

        function filterColumn(i, table) {
            var elem = $(table);
            var publication = elem.attr("data-publication");
            
            var real_table = $('section.content table[data-publication="'+publication+'"]');
            var query = $('.FixedHeader_Cloned table[data-publication="'+publication+'"] .col'+i+'_filter')
            real_table.DataTable().column(i).search(query.val(), true, true).draw();
        }

        $('input.column_filter').on('keyup click', function () {
            filterColumn($(this).attr('data-column'), $(this).closest('table'));
        });
    })
})();

(function () {
    
    var tables = $("table[data-game]");
    
    tables.each(function (i, elem) {
        var game = $(elem).attr("data-game");
        
        var table = $(elem).dataTable({
            "data": ikrpg.index.data.filter(ikrpg.index.filter.game(game)),
            "columns": [
                { "data": "name" },
                { "data": "publication" },
                { "data": "page" },
                { "data": "category" },
                { "data": "subcategory" }
            ],
            "paging": false,
            "info": false,
            "fnRowCallback": function(row, data, index) {
              var p_url = data.publication.replace(/[#]/g, "").replace(/[\/\s]+/g, "-")
              var c_url = data.category.replace(/[\s]+/g, "-");
              var sc_url = data.subcategory.replace(/[#]/g, "").replace(/[\/\s]+/g, "-")
              
              $('td:eq(1)', row).html('<a href="/index/publication/'+p_url+'/">'+data.publication+'</a>');
              $('td:eq(3)', row).html('<a href="/index/category/'+c_url+'/">'+data.category+'</a>');
              $('td:eq(4)', row).html('<a href="/index/category/'+c_url+'/#'+sc_url+'">'+data.subcategory+'</a>');
              return row;
            }
        });

        new $.fn.dataTable.FixedHeader(table);

        function filterColumn(i, table) {            
            var real_table = $('section.content table[data-game]');
            var query = $('.FixedHeader_Cloned table[data-game] .col'+i+'_filter')
            real_table.DataTable().column(i).search(query.val(), true, true).draw();
        }

        $('input.column_filter').on('keyup click', function () {
            filterColumn($(this).attr('data-column'), $(this).closest('table'));
        });
    })
})();

(function () {
    
    var tables = $("table[data-index]");
    
    tables.each(function (i, elem) {
        
        var table = $(elem).dataTable({
            "data": ikrpg.index.data,
            "columns": [
                { "data": "name" },
                { "data": "publication" },
                { "data": "page" },
                { "data": "category" },
                { "data": "subcategory" },
                { "data": "game" }
            ],
            "paging": false,
            "info": false,
            "fnRowCallback": function(row, data, index) {
              var p_url = data.publication.replace(/[#]/g, "").replace(/[\/\s]+/g, "-")
              var c_url = data.category.replace(/[\s]+/g, "-");
              var sc_url = data.subcategory.replace(/[#]/g, "").replace(/[\/\s]+/g, "-")
              var g_url = data.game.replace(/[\s]+/g, "-");
              
              $('td:eq(1)', row).html('<a href="/index/publication/'+p_url+'">'+data.publication+'</a>');
              $('td:eq(3)', row).html('<a href="/index/category/'+c_url+'">'+data.category+'</a>');
              $('td:eq(4)', row).html('<a href="/index/category/'+c_url+'/#'+sc_url+'">'+data.subcategory+'</a>');
              $('td:eq(5)', row).html('<a href="/index/game/'+g_url+'">'+data.game+'</a>');
              return row;
            }
        });

        new $.fn.dataTable.FixedHeader(table);

        function filterColumn(i, table) {            
            var real_table = $('section.content table[data-index]');
            var query = $('.FixedHeader_Cloned table[data-index] .col'+i+'_filter')
            real_table.DataTable().column(i).search(query.val(), true, true).draw();
        }

        $('input.column_filter').on('keyup click', function () {
            filterColumn($(this).attr('data-column'), $(this).closest('table'));
        });
    })
})();