/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    plugins: {
        MousePositionPlugin: require('../MapStore2/web/client/plugins/MousePosition'),
        PrintPlugin: require('../MapStore2/web/client/plugins/Print'),
        IdentifyPlugin: require('../MapStore2/web/client/plugins/Identify'),
        TOCPlugin: require('../MapStore2/web/client/plugins/TOC'),
        BackgroundSelectorPlugin: require('../MapStore2/web/client/plugins/BackgroundSelector'),
        MeasurePlugin: require('../MapStore2/web/client/plugins/Measure'),
        MapPlugin: require('../MapStore2/web/client/plugins/Map'),
        ToolbarPlugin: require('../MapStore2/web/client/plugins/Toolbar'),
        DrawerMenuPlugin: require('../MapStore2/web/client/plugins/DrawerMenu'),
        ShapeFilePlugin: require('../MapStore2/web/client/plugins/ShapeFile'),
        // SnapshotPlugin: require('../plugins/Snapshot'),
        SettingsPlugin: require('../MapStore2/web/client/plugins/Settings'),
        ExpanderPlugin: require('../MapStore2/web/client/plugins/Expander'),
        SearchPlugin: require('../MapStore2/web/client/plugins/Search'),
        ScaleBoxPlugin: require('../MapStore2/web/client/plugins/ScaleBox'),
        LocatePlugin: require('../MapStore2/web/client/plugins/Locate'),
        ZoomInPlugin: require('../MapStore2/web/client/plugins/ZoomIn'),
        ZoomOutPlugin: require('../MapStore2/web/client/plugins/ZoomOut'),
        ZoomAllPlugin: require('../MapStore2/web/client/plugins/ZoomAll'),
        // FullScreenPlugin: require('../plugins/FullScreen'),
        MapLoadingPlugin: require('../MapStore2/web/client/plugins/MapLoading'),
        // AboutPlugin: require('./plugins/About'),
        // HelpPlugin: require('../plugins/Help'),
        // HelpLinkPlugin: require('../plugins/HelpLink'),
        HomePlugin: require('../MapStore2/web/client/plugins/Home'),
        // MadeWithLovePlugin: require('./plugins/MadeWithLove'),
        MetadataExplorerPlugin: require('./plugins/MetadataExplorer'),
        LoginPlugin: require('../MapStore2/web/client/plugins/Login'),
        OmniBarPlugin: require('../MapStore2/web/client/plugins/OmniBar'),
        // GridContainerPlugin: require('../plugins/GridContainer'),
        BurgerMenuPlugin: require('../MapStore2/web/client/plugins/BurgerMenu'),
        UndoPlugin: require('../MapStore2/web/client/plugins/History'),
        RedoPlugin: require('../MapStore2/web/client/plugins/History'),
        MapsPlugin: require('../MapStore2/web/client/plugins/Maps'),
        MapSearchPlugin: require('../MapStore2/web/client/plugins/MapSearch'),
        HomeDescriptionPlugin: require('./plugins/HomeDescription'),
        ServiceFiltersPlugin: require('./plugins/ServiceFilters'),        
        RoadAccidentsPlugin: require('./plugins/RoadAccidents'),        
        // ExamplesPlugin: require('./plugins/Examples'),
        // MapTypePlugin: require('./plugins/MapType'),
        LanguagePlugin: require('../MapStore2/web/client/plugins/Language'),
        // AttributionPlugin: require('./plugins/Attribution'),
        HeaderPlugin: require('./plugins/Header'),
        // ForkPlugin: require('./plugins/Fork'),
        FooterPlugin: require('./plugins/Footer'),
        ManagerPlugin: require('../MapStore2/web/client/plugins/manager/Manager'),
        UserManagerPlugin: require('../MapStore2/web/client/plugins/manager/UserManager'),
        GroupManagerPlugin: require('../MapStore2/web/client/plugins/manager/GroupManager'),
        RulesManagerPlugin: require('../MapStore2/web/client/plugins/manager/RulesManager'),
        ManagerMenuPlugin: require('../MapStore2/web/client/plugins/manager/ManagerMenu'),
        RedirectPlugin: require('../MapStore2/web/client/plugins/Redirect'),
        SharePlugin: require('../MapStore2/web/client/plugins/Share'),
        SavePlugin: require('../MapStore2/web/client/plugins/Save'),
        SaveAsPlugin: require('../MapStore2/web/client/plugins/SaveAs'),
        CreateNewMapPlugin: require('../MapStore2/web/client/plugins/CreateNewMap'),
        QueryPanelPlugin: require('../MapStore2/web/client/plugins/QueryPanel'),
        WFSDownloadPlugin: require('../MapStore2/web/client/plugins/WFSDownload'),
        Tutorial: require('../MapStore2/web/client/plugins/Tutorial'),
        // ThemeSwitcherPlugin: require('../plugins/ThemeSwitcher'),
        ScrollTopPlugin: require('../MapStore2/web/client/plugins/ScrollTop'),
        GoFull: require('../MapStore2/web/client/plugins/GoFull'),
        // GlobeViewSwitcherPlugin: require('../plugins/GlobeViewSwitcher'),
        // BackgroundSelectorPlugin: require('../plugins/BackgroundSelector'),
        // SearchServicesConfigPlugin: require('../plugins/SearchServicesConfig'),
        VersionPlugin: require('../MapStore2/web/client/plugins/Version'),
        CookiePlugin: require('../MapStore2/web/client/plugins/Cookie'),
        NotificationsPlugin: require('../MapStore2/web/client/plugins/Notifications'),
        FeatureEditorPlugin: require('../MapStore2/web/client/plugins/FeatureEditor'),
        AutoMapUpdatePlugin: require('./plugins/AutoMapUpdate'),
        MapFooterPlugin: require('../MapStore2/web/client/plugins/MapFooter'),
        // AnnotationsPlugin: require('../plugins/Annotations'),
        WidgetsPlugin: require('../MapStore2/web/client/plugins/Widgets'),
        WidgetsBuilderPlugin: require('../MapStore2/web/client/plugins/WidgetsBuilder'),
        // DetailsPlugin: require('../MapStore2/web/client/plugins/Details'),
        TOCItemsSettingsPlugin: require('../MapStore2/web/client/plugins/TOCItemsSettings'),
        SearchParcelPlugin: require('./plugins/SearchParcel')
        
        },
    requires: {
        ReactSwipe: require('react-swipeable-views').default,
        SwipeHeader: require('../MapStore2/web/client/components/data/identify/SwipeHeader')
    }
};
