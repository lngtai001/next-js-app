type Props = {
    id: string;
    className: string;
    children: React.ReactNode;
  }

export const MyCustomSection: React.FC<Props> = ({id, className, children}: Props) => (
    <section id={id} className={className}> 
        { children }
    </section>
    );