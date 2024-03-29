import {Form} from "macif-components";
import {useRef} from "react";

export interface Choice {
    readonly libelle: string;
    readonly code: string | number;
}

export interface ChoiceSwitcherProps<T extends Choice> {
    readonly onChoiceSelected: (value: T) => void;
    readonly choiceSelected: T;
    readonly dataSource: Array<T>;
    readonly label: string;
    readonly optionalText?: string;
    readonly id: string;
    readonly show?: boolean;
    readonly nbSwitchers?: number;
    readonly errorMessage?: string;
}

const DEFAULT_NB_SWITCHER = 3;

export default function ChoiceSwitcher<T extends Choice>({
    dataSource,
    onChoiceSelected,
    choiceSelected,
    label,
    optionalText,
    id,
    show = true,
    nbSwitchers = DEFAULT_NB_SWITCHER,
    errorMessage = ""
}: ChoiceSwitcherProps<T>) {
    const choiceSwitcherGroupRef = useRef<HTMLDivElement>(null);

    return show && dataSource.length > 0 ? (
        <Form.Group controlId={id} ref={choiceSwitcherGroupRef}>
            <Form.Label id={id} optionalText={optionalText}>
                {label}
            </Form.Label>

            <Form.SwitcherGroup
                type="radio"
                role="radiogroup"
                aria-labelledby={id}
                nbSwitchers={nbSwitchers}
                name={id}
                value={choiceSelected}
                onChange={onChoiceSelected}
                isInvalid={errorMessage !== ""}
                onFocus={() => choiceSwitcherGroupRef.current?.scrollIntoView({behavior: "smooth", block: "center"})}
            >
                {dataSource.map(value => {
                    return (
                        <Form.Switcher
                            id={id + value.code}
                            key={id + value.code}
                            value={value}
                            className="mcf-btn--switcher--outline"
                        >
                            {value.libelle}
                        </Form.Switcher>
                    );
                })}
            </Form.SwitcherGroup>
            <Form.Control.Feedback type="invalid">
                <span className="icon icon-erreur"></span>
                {errorMessage}
            </Form.Control.Feedback>
        </Form.Group>
    ) : (
        <></>
    );
}
