(function(c){var d=window.AmazonUIPageJS||window.P,e=d._namespace||d.attributeErrors,b=e?e("InstallmentPaymentDetailPageAssets",""):d;b.guardFatal?b.guardFatal(c)(b,window):b.execute(function(){c(b,window)})})(function(c,d,e){function b(a){var f=a.$("select[name\x3d'quantity']").val(),b=a.$("#installmentsQuantityDropdown").val();if(f!==b){var c=1,d,e=0,b=a.$("#installmentsQuantityDropdown option");b.each(function(a,b){d=b.value;e=c=Math.max(e,d)});f>c&&(f=c);b.length?a.$("#installmentsQuantityDropdown").val(f).trigger("change"):
(a.$("[name\x3d'quantity']").val(f).trigger("change"),a.$("[name\x3d'items[0.base][quantity]']").val(f))}}c.when("A").execute("installment-quantity-dropdown",function(a){a.declarative("installment-quantity-dropdown","change",function(b){b=b.$event.target.value;a.$("[name\x3d'quantity']").val(b).trigger("change");a.$("[name\x3d'items[0.base][quantity]']").val(b)})});c.when("A").execute(function(a){a.on("a:accordion:installment-payment-buybox-accordion:installment-payment-accordion-row:select",function(c){b(a)})});
c.when("A").execute(function(a){a.on("a:accordion:buybox-accordion:installmentPaymentAccordionRow:select",function(c){b(a)})});c.when("A").execute(function(a){a.on("a:accordion:buybox-accordion:mobile_installmentPaymentAccordionRow:select",function(c){b(a)})});c.when("A").execute(function(a){a.on("a:accordion:buybox-accordion:mobileapp_installmentPaymentAccordionRow:select",function(c){b(a)})})});