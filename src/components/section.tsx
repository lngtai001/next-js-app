interface Props {
    id: string;
    className: string;
    children: React.ReactNode;
  }

export const MyCustomSection: React.FC<Props> = ({id, className, children}) => (
   <section id={id} className={className}> 
        { children }
     </section>
  );