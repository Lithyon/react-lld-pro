export {};

interface DataLayerEvent {
    page_name: string;
    event: string;
}
declare global {
    interface Window {
        servicesRestBaseUrl: string;
        dataLayer: Array<DataLayerEvent>;
    }
}
