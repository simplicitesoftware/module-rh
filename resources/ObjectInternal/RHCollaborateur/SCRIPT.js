var RHCollaborateur = RHCollaborateur || (function(ui, $) {
	Simplicite.UI.hooks.RHCollaborateur = function(o, cbk) {
		try {
			o.locals.ui.form.onload = function(ctn, obj) {
				function _searchbox() {
					var addr = ui.getUIField(ctn, obj, "rhColAdresse").ui.input[0];
					var ac = new google.maps.places.Autocomplete(addr);
					ac.addListener("place_changed", function() {
						var p = ac.getPlace();
						console.log(p);
						ui.getUIField(ctn, obj, "rhColAdresse").ui.val(p.formatted_address);
						for (var i = 0; i < p.address_components.length; i++) {
							var a = p.address_components[i];
							if (a.types.includes("locality"))
								ui.getUIField(ctn, obj, "rhColVille").ui.val(a.long_name);
							else if (a.types.includes("postal_code"))
								ui.getUIField(ctn, obj, "rhColCodePostal").ui.val(a.long_name);
						}
						var l = p.geometry.location;
						ui.getUIField(ctn, obj, "rhColCoords").ui.val(l.lat() + "," + l.lng());
					});
				}

				try {
					if (typeof(google)=="undefined" || typeof(google.maps)=="undefined" || typeof(google.maps.places)=="undefined")
						ui.loadScript({ url: Simplicite.GOOGLE_MAPS_JS_URL, onload: _searchbox });
					else
						_searchbox();
				} catch (el) {
					console.error(el.message);
				}
			};
		} catch (e) {
			console.error(e.message);
		} finally {
			cbk && cbk();
		}
	};
})(window.$ui, jQuery);