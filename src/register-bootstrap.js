import bAlert from 'bootstrap-vue/es/components/alert/alert';
import bBadge from 'bootstrap-vue/es/components/badge/badge';
import bBreadcrump from 'bootstrap-vue/es/components/breadcrumb/breadcrumb';
import bBreadcrumpItem from 'bootstrap-vue/es/components/breadcrumb/breadcrumb-item';
import bBreadcrumpLink from 'bootstrap-vue/es/components/breadcrumb/breadcrumb-link';
import bButton from 'bootstrap-vue/es/components/button/button';
import bButtonClose from 'bootstrap-vue/es/components/button/button-close';
import bButtonGroup from 'bootstrap-vue/es/components/button-group/button-group';
import bButtonToolbar from 'bootstrap-vue/es/components/button-toolbar/button-toolbar';
import bCard from 'bootstrap-vue/es/components/card/card';
import bCardBody from 'bootstrap-vue/es/components/card/card-body';
import bCardFooter from 'bootstrap-vue/es/components/card/card-footer';
import bCardGroup from 'bootstrap-vue/es/components/card/card-group';
import bCardHeader from 'bootstrap-vue/es/components/card/card-header';
import bCardImg from 'bootstrap-vue/es/components/card/card-img';
import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';
import bCarouselSlide from 'bootstrap-vue/es/components/carousel/carousel-slide';
import bCollapse from 'bootstrap-vue/es/components/collapse/collapse';
import bDropdown from 'bootstrap-vue/es/components/dropdown/dropdown';
import bDropdownDevider from 'bootstrap-vue/es/components/dropdown/dropdown-divider';
import bDropdownHeader from 'bootstrap-vue/es/components/dropdown/dropdown-header';
import bDropdownButton from 'bootstrap-vue/es/components/dropdown/dropdown-item-button';
import bDropdownItem from 'bootstrap-vue/es/components/dropdown/dropdown-item';
import bEmbed from 'bootstrap-vue/es/components/embed/embed';
import bForm from 'bootstrap-vue/es/components/form/form';
import bFormInvalidFeedback from 'bootstrap-vue/es/components/form/form-invalid-feedback';
import bFormRow from 'bootstrap-vue/es/components/form/form-row';
import bFormText from 'bootstrap-vue/es/components/form/form-text';
import bFormValidFeedback from 'bootstrap-vue/es/components/form/form-valid-feedback';
import bFormTextarea from 'bootstrap-vue/es/components/form-textarea/form-textarea';
import bFormSelect from 'bootstrap-vue/es/components/form-select/form-select';
import bFormRadio from 'bootstrap-vue/es/components/form-radio/form-radio';
import bFormRadioGroup from 'bootstrap-vue/es/components/form-radio/form-radio-group';
import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group';
import bFormCheckbox from 'bootstrap-vue/es/components/form-checkbox/form-checkbox';
import bFormCheckboxGroup from 'bootstrap-vue/es/components/form-checkbox/form-checkbox-group';
import bFormFile from 'bootstrap-vue/es/components/form-file/form-file';
import bImg from 'bootstrap-vue/es/components/image/img';
import bImgLazy from 'bootstrap-vue/es/components/image/img-lazy';
import bInputGroup from 'bootstrap-vue/es/components/input-group/input-group';
import bInputGroupAddon from 'bootstrap-vue/es/components/input-group/input-group-addon';
import bInputGroupAppend from 'bootstrap-vue/es/components/input-group/input-group-append';
import bInputGroupPrepend from 'bootstrap-vue/es/components/input-group/input-group-prepend';
import bInputGroupText from 'bootstrap-vue/es/components/input-group/input-group-text';
import bJumbotron from 'bootstrap-vue/es/components/jumbotron/jumbotron';
import bContainer from 'bootstrap-vue/es/components/layout/container';
import bRow from 'bootstrap-vue/es/components/layout/row';
import bCol from 'bootstrap-vue/es/components/layout/col';
import bLink from 'bootstrap-vue/es/components/link/link';
import bListGroup from 'bootstrap-vue/es/components/list-group/list-group';
import bListGroupItem from 'bootstrap-vue/es/components/list-group/list-group-item';
import bMedia from 'bootstrap-vue/es/components/media/media';
import bMediaAside from 'bootstrap-vue/es/components/media/media-aside';
import bMediaBody from 'bootstrap-vue/es/components/media/media-body';
import bNav from 'bootstrap-vue/es/components/nav/nav';
import bNavText from 'bootstrap-vue/es/components/nav/nav-text';
import bNavItemDropdown from 'bootstrap-vue/es/components/nav/nav-item-dropdown';
import bNavForm from 'bootstrap-vue/es/components/nav/nav-form';
import bNavItem from 'bootstrap-vue/es/components/nav/nav-item';
import bNavbar from 'bootstrap-vue/es/components/navbar/navbar';
import bNavbarBrand from 'bootstrap-vue/es/components/navbar/navbar-brand';
import bNavbarNav from 'bootstrap-vue/es/components/navbar/navbar-nav';
import bNavbarToggle from 'bootstrap-vue/es/components/navbar/navbar-toggle';
import bPagination from 'bootstrap-vue/es/components/pagination/pagination';
import bPaginationNav from 'bootstrap-vue/es/components/pagination-nav/pagination-nav';
import bPopover from 'bootstrap-vue/es/components/popover/popover';
import bProgress from 'bootstrap-vue/es/components/progress/progress';
import bProgressBar from 'bootstrap-vue/es/components/progress/progress-bar';
import bTable from 'bootstrap-vue/es/components/table/table';
import bTabs from 'bootstrap-vue/es/components/tabs/tabs';
import bTab from 'bootstrap-vue/es/components/tabs/tab';
/**
 * Diretives
 */
import vbModal from 'bootstrap-vue/es/directives/modal/modal';
import vbToggle from 'bootstrap-vue/es/directives/toggle/toggle';
import vbTooltip from 'bootstrap-vue/es/directives/tooltip/tooltip';
import vbPopover from 'bootstrap-vue/es/directives/popover/popover';
import vbScrollspy from 'bootstrap-vue/es/directives/scrollspy/scrollspy';
import vbScrollspyClass from 'bootstrap-vue/es/directives/scrollspy/scrollspy.class';


export default {
    install: function(Vue, options){
        Vue.component('b-alert', bAlert);
        Vue.component('b-badge', bBadge);
        Vue.component('b-breadcrumb', bBreadcrump);
        Vue.component('b-breadcrump-item', bBreadcrumpItem);
        Vue.component('b-breadcrump-link', bBreadcrumpLink);
        Vue.component('b-button', bButton);
        Vue.component('b-btn', bButton);
        Vue.component('b-button-close', bButtonClose);
        Vue.component('b-button-group', bButtonGroup);
        Vue.component('b-button-toolbar', bButtonToolbar);
        Vue.component('b-card', bCard);
        Vue.component('b-card-body', bCardBody);
        Vue.component('b-card-footer', bCardFooter);
        Vue.component('b-card-group', bCardGroup);
        Vue.component('b-card-header', bCardHeader);
        Vue.component('b-card-img', bCardImg);
        Vue.component('b-carousel', bCarousel);
        Vue.component('b-carousel-slide', bCarouselSlide);
        Vue.component('b-collapse', bCollapse);
        Vue.component('b-dropdown', bDropdown);
        Vue.component('b-dropdown-button', bDropdownButton);
        Vue.component('b-dropdown-divider', bDropdownDevider);
        Vue.component('b-dropdown-header', bDropdownHeader);
        Vue.component('b-dropdown-item', bDropdownItem);
        Vue.component('b-embed', bEmbed);
        Vue.component('b-form', bForm);
        Vue.component('b-form-invalid-feedback', bFormInvalidFeedback);
        Vue.component('b-form-row', bFormRow);
        Vue.component('b-form-text', bFormText);
        Vue.component('b-form-valid-feedback', bFormValidFeedback);
        Vue.component('b-form-textaread', bFormTextarea);
        Vue.component('b-form-select', bFormSelect);
        Vue.component('b-form-radio', bFormRadio);
        Vue.component('b-form-radio-group', bFormRadioGroup);
        Vue.component('b-form-input', bFormInput);
        Vue.component('b-form-group', bFormGroup);
        Vue.component('b-form-checkbox', bFormCheckbox);
        Vue.component('b-form-checkbox-group', bFormCheckboxGroup);
        Vue.component('b-form-file', bFormFile);
        Vue.component('b-form-file', bFormFile);
        Vue.component('b-img', bImg);
        Vue.component('b-img-lazy', bImgLazy);
        Vue.component('b-input-group', bInputGroup);
        Vue.component('b-input-group-addon', bInputGroupAddon);
        Vue.component('b-input-group-append', bInputGroupAppend);
        Vue.component('b-input-group-prepend', bInputGroupPrepend);
        Vue.component('b-input-group-text', bInputGroupText);
        Vue.component('b-jumbotron', bJumbotron);
        Vue.component('b-container', bContainer);
        Vue.component('b-row', bRow);
        Vue.component('b-col', bCol);
        Vue.component('b-link', bLink);
        Vue.component('b-list-group', bListGroup);
        Vue.component('b-list-group-item', bListGroupItem);
        Vue.component('b-media', bMedia);
        Vue.component('b-media-aside', bMediaAside);
        Vue.component('b-media-body', bMediaBody);
        Vue.component('b-nav', bNav);
        Vue.component('b-nav-form', bNavForm);
        Vue.component('b-nav-item', bNavItem);
        Vue.component('b-nav-item-dropdown', bNavItemDropdown);
        Vue.component('b-nav-text', bNavText);
        Vue.component('b-navbar', bNavbar);
        Vue.component('b-navbar-brand', bNavbarBrand);
        Vue.component('b-navbar-nav', bNavbarNav);
        Vue.component('b-navbar-toggle', bNavbarToggle);
        Vue.component('b-pagination', bPagination);
        Vue.component('b-pagination-nav', bPaginationNav);
        Vue.component('b-popover', bPopover);
        Vue.component('b-progress', bProgress);
        Vue.component('b-progress-bar', bProgressBar);
        Vue.component('b-table', bTable);
        Vue.component('b-tabs', bTabs);
        Vue.component('b-tab', bTab);



        Vue.directive('b-modal',vbModal);
        Vue.directive('b-toggle',vbToggle);
        Vue.directive('b-tooltip',vbTooltip);
        Vue.directive('b-popover',vbPopover);
        Vue.directive('b-scrollspy',vbScrollspy);
        Vue.directive('b-scrollspay-class',vbScrollspyClass);
    }
}