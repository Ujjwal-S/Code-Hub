import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updateUserInput } from "../../store/codeSlice";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import arrowRepeatImgURL from "../../assets/CodePage/arrow_repeat.svg"

const InputOutput = () => {
    const dispatch = useAppDispatch();
    const codeExecuting = useAppSelector(state => state.codeContext.codeExecuting)

    return (
        <ReflexContainer orientation="horizontal" className={`h-full flex flex-col min-w-[250px] ${codeExecuting && 'cursor-wait'}`}>
            {/* Input */}
            <ReflexElement flex={0.5} className="p-2 min-h-0 grow" >
                <div className="min-h-0 h-full bg-primary">
                    <h1 className='select-none'>Input :</h1>
                    <div className='py-4 p-2 h-full w-full'>
                        <textarea
                        className={`h-full w-full resize-none outline-none bg-primary  ${codeExecuting && 'cursor-wait'}`}
                        onChange={(e) => dispatch(updateUserInput(e.target.value))}
                        disabled={codeExecuting}
                        placeholder="Your input goes here."
                        ></textarea>
                    </div>
                </div>
            </ReflexElement>

            <ReflexSplitter className="h-3 bg-code-page-secondary cursor-row-resize" />

            <ReflexElement flex={0.5} className="p-2 min-h-0 grow">
                <div className="min-h-0 h-full bg-primary">
                    <h1 className='select-none'>Output :</h1>
                    { codeExecuting
                        ?
                            <div className="py-4 p-2 h-full w-full flex justify-center items-center animate-spin-slow">
                                <img src={arrowRepeatImgURL} className="w-10 h-10" alt="" />
                            </div>
                        :
                            <div className='py-4 p-2 h-full w-full'>
                                <pre className=''></pre>
                            </div>
                    }
                </div>
            </ReflexElement>

        </ReflexContainer>
    
    )
}

export default InputOutput;
